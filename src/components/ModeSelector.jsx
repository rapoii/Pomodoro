import React from 'react';

const ModeSelector = ({ mode, onModeChange, disabled }) => {
    const modes = [
        { id: 'focus', label: 'Focus', color: 'bg-focus' },
        { id: 'short', label: 'Short Break', color: 'bg-shortBreak' },
        { id: 'long', label: 'Long Break', color: 'bg-longBreak' },
    ];

    return (
        <div className="flex gap-2 sm:gap-4 mb-12 p-2 bg-surface-light rounded-full border border-white/5">
            {modes.map((m) => {
                const isActive = mode === m.id;
                return (
                    <button
                        key={m.id}
                        onClick={() => onModeChange(m.id)}
                        disabled={disabled}
                        className={`
              px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base transition-all
              ${isActive ? `${m.color} text-white shadow-md` : 'text-gray-400 hover:text-white hover:bg-white/5'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
                    >
                        {m.label}
                    </button>
                );
            })}
        </div>
    );
};

export default ModeSelector;
