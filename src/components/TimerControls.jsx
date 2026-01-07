import React from 'react';

const TimerControls = ({ isActive, onToggle, onReset, mode }) => {
    const getButtonColor = () => {
        switch (mode) {
            case 'short': return 'bg-shortBreak hover:bg-shortBreak-dark';
            case 'long': return 'bg-longBreak hover:bg-longBreak-dark';
            default: return 'bg-focus hover:bg-focus-dark';
        }
    };

    return (
        <div className="flex gap-6">
            <button
                onClick={onToggle}
                className={`px-8 py-4 text-white font-bold rounded-2xl text-xl uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg ${getButtonColor()}`}
            >
                {isActive ? 'Pause' : 'Start'}
            </button>

            <button
                onClick={onReset}
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-2xl text-xl uppercase tracking-widest hover:bg-white/10 transition-all"
            >
                Reset
            </button>
        </div>
    );
};

export default TimerControls;
