import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import Footer from './components/Footer';
import useTimer from './hooks/useTimer';
import { formatTime } from './utils/formatTime';
import { saveSession } from './services/api';

const DURATIONS = {
  focus: 25 * 60,
  short: 5 * 60,
  long: 15 * 60,
};

const DURATION_MINUTES = {
  focus: 25,
  short: 5,
  long: 15,
};

function App() {
  const [mode, setMode] = useState('focus');
  const [isActive, setIsActive] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  // Initialize timer with current mode duration
  const { timeLeft, setTimeLeft } = useTimer(DURATIONS[mode], isActive);

  // Sound player
  const playAlarm = () => {
    // Attempt to play audio
    const audio = new Audio('/sounds/alarm.mp3');
    audio.play().catch(e => {
      // Audio play might fail if user hasn't interacted with document
      console.log('Audio play notification:', e);
    });
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(DURATIONS[newMode]);
  };

  const handleTimerComplete = () => {
    playAlarm();

    saveSession({
      mode: mode,
      duration: DURATION_MINUTES[mode],
      status: 'Completed'
    });

    if (mode === 'focus') {
      const newSessions = completedSessions + 1;
      setCompletedSessions(newSessions);
      // Auto switch logic
      if (newSessions % 4 === 0) {
        switchMode('long');
      } else {
        switchMode('short');
      }
    } else {
      // Break is over, back to focus
      switchMode('focus');
    }
  };

  // Watch for timer completion
  useEffect(() => {
    if (timeLeft === 0 && isActive) {
      handleTimerComplete();
    }
    // Note: We include isActive to ensure we only trigger when running
    // However, logic inside handleTimerComplete calls switchMode which sets isActive=false
    // So this loop is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isActive]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(DURATIONS[mode]);
  };

  // Document Title Effect
  useEffect(() => {
    const timeString = formatTime(timeLeft);
    const modeLabel = mode === 'focus' ? 'Focus' : mode === 'short' ? 'Break' : 'Long Break';
    document.title = `${timeString} - ${modeLabel} | Pomodoro`;
  }, [timeLeft, mode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500">
      <Header />

      <ModeSelector
        mode={mode}
        onModeChange={switchMode}
        disabled={isActive}
      />

      <TimerDisplay
        timeLeft={timeLeft}
        mode={mode}
      />

      <TimerControls
        isActive={isActive}
        onToggle={toggleTimer}
        onReset={resetTimer}
        mode={mode}
      />

      <Footer completedSessions={completedSessions} />
    </div>
  );
}

export default App;
