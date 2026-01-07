import React from 'react';
import { formatTime } from '../utils/formatTime';

const TimerDisplay = ({ timeLeft, mode }) => {
    const getModeColor = () => {
        switch (mode) {
            case 'short': return 'text-shortBreak';
            case 'long': return 'text-longBreak';
            default: return 'text-focus';
        }
    };

    const isUrgent = timeLeft < 60;

    return (
        <div className={`text-9xl font-bold font-mono mb-8 transition-colors duration-500 ${getModeColor()} ${isUrgent ? 'animate-pulse' : ''}`}>
            {formatTime(timeLeft)}
        </div>
    );
};

export default TimerDisplay;
