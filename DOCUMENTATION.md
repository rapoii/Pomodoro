# 📚 Project Documentation

## Project Structure

```
pomodoro/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx      # App header
│   │   ├── Footer.jsx      # App footer
│   │   ├── ModeSelector.jsx # Switch between Focus, Short Break, Long Break
│   │   ├── TimerDisplay.jsx # Displays the countdown timer
│   │   └── TimerControls.jsx # Start, Stop, Reset buttons
│   ├── hooks/
│   │   └── useTimer.js     # Custom hook for timer logic
│   ├── services/
│   │   └── api.js          # Google Sheets API integration service
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Entry point
└── ...
```

## 🧩 Components

### Core Components
- **TimerDisplay**: Renders the current time left in `MM:SS` format.
- **TimerControls**: Provides interactive buttons to control the timer state (Start, Pause, Reset).
- **ModeSelector**: Allows users to switch between different timer modes. Changing modes automatically resets the timer to the mode's default duration.

## 🎣 Custom Hooks

### `useTimer`
Manages the timer state and logic.
- **State**: `timeLeft`, `isRunning`, `mode`
- **Actions**: `start`, `pause`, `reset`, `setMode`

## 🔌 API Integration (Google Sheets)

The application uses a serverless approach to log data into Google Sheets via Google Apps Script.

### `saveSession(sessionData)`
Located in `src/services/api.js`.
- **Purpose**: Sends a POST request to the Google Apps Script Web App.
- **Payload**:
  ```json
  {
    "mode": "Focus" | "Short Break" | "Long Break",
    "duration": number, // in minutes
    "status": "Completed" | "Stopped",
    "date": "dd/mm/yyyy"
  }
  ```
- **Configuration**: Requires `VITE_GOOGLE_SCRIPT_URL` in `.env`.

## 🎨 Styling
The project uses **Tailwind CSS** for styling.
- **Configuration**: `vite.config.js` and CSS imports in `src/index.css`.
- **Theme**: Uses default Tailwind colors with custom utility classes for layout.

## 🚀 Deployment
This project is optimized for deployment on platforms like Vercel or Netlify.
1. Run `npm run build` to generate the `dist` folder.
2. Deploy the `dist` folder to your static hosting provider.
