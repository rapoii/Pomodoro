import { useState, useEffect } from 'react';

function useTimer(initialTime, isActive, onComplete) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (!isActive || timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0 && onComplete) {
            onComplete();
        }
    }, [timeLeft, onComplete]);

    return { timeLeft, setTimeLeft };
}

export default useTimer;
