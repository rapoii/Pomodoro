# Pomodoro Timer Application

## 📝 Overview
A modern, clean, and customizable Pomodoro Timer application built with React and Vite. This application helps you stay focused by using the Pomodoro Technique, breaking work into intervals separated by short breaks. It also features a seamless integration with Google Sheets to log your productive sessions automatically.

## ✨ Features
- **Customizable Timer**: Pre-sets for Focus (Pomodoro), Short Break, and Long Break.
- **Google Sheets Integration**: Automatically logs completed sessions (Mode, Duration, Status, Date) to a Google Sheet.
- **Clean UI**: Minimalist design using Tailwind CSS for a distraction-free experience.
- **Responsive Design**: Works perfectly on desktop and mobile devices.

## 🛠️ Tech Stack
- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Backend/API**: Google Apps Script (for Google Sheets integration)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rapoii/Pomodoro.git
   cd pomodoro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your Google Apps Script URL:
   ```env
   VITE_GOOGLE_SCRIPT_URL=your_google_script_web_app_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📄 Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
