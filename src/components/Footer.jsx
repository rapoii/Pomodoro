import React from 'react';

const Footer = ({ completedSessions }) => {
    return (
        <footer className="mt-16 flex flex-col items-center gap-4 text-gray-400">
            <div className="flex flex-col items-center gap-2">
                <p className="uppercase tracking-widest text-sm font-bold">Session</p>
                <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full border-2 border-white/20 transition-colors ${i < (completedSessions % 4) ? 'bg-focus border-focus' : 'bg-transparent'
                                }`}
                        />
                    ))}
                </div>
                <p className="text-xs mt-1">Total: {completedSessions}</p>
            </div>

            <div className="mt-8 text-sm opacity-50">
                Built with React & Tailwind
            </div>
        </footer>
    );
};

export default Footer;
