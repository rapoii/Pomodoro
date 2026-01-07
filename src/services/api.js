// src/services/api.js

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

/**
 * Simpan sesi Pomodoro ke Google Sheets
 * @param {Object} sessionData - Data sesi
 * @param {string} sessionData.mode - 'focus', 'short', atau 'long'
 * @param {number} sessionData.duration - Durasi dalam menit
 * @param {string} sessionData.status - 'Completed' atau 'Stopped'
 */
export const saveSession = async (sessionData) => {
    if (!GOOGLE_SCRIPT_URL) {
        console.warn('Google Script URL not configured');
        return;
    }

    const payload = {
        mode: sessionData.mode === 'focus' ? 'Focus' :
            sessionData.mode === 'short' ? 'Short Break' : 'Long Break',
        duration: sessionData.duration,
        status: sessionData.status,
        date: new Date().toLocaleDateString('id-ID')
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            mode: 'no-cors'
        });
        console.log('Session saved to spreadsheet');
        return true;
    } catch (error) {
        console.error('Failed to save session:', error);
        return false;
    }
};
