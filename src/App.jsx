import React, { useState, useEffect } from 'react';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';
import './App.css'

// Definisikan komponen utama "App"
const App = () => {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [timeLeft, seTtimeLeft] = React.useState(1500);
  const [timingType, setTimingtype] = React.useState("SESSION");
  const [play, setPlay] = React.useState(false);

  // Timeout untuk mengurangi waktu tersisa setiap 1 detik
  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      seTtimeLeft(timeLeft - 1);
    }
  }, 1000);

  // Fungsi-fungsi untuk mengatur durasi istirahat dan sesi
  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      seTtimeLeft(timeLeft + 60);
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      seTtimeLeft(timeLeft - 60);
    }
  };

  // Fungsi untuk mengatur ulang timer
  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    seTtimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingtype("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  // Fungsi untuk mengontrol pemutaran timer
  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };

  // Fungsi untuk mengatur ulang timer saat waktu habis
  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && timingType === "SESSION") {
      seTtimeLeft(breakLength * 60);
      setTimingtype("BREAK");
      audio.play();
    }
    if (!timeLeft && timingType === "BREAK") {
      seTtimeLeft(sessionLength * 60);
      setTimingtype("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  // Fungsi untuk mengontrol timer
  const clock = () => {
    if (play) {
      timeout;
      resetTimer();
    } else {
      clearTimeout(timeout);
    }
  };

  // Menggunakan useEffect untuk memanggil fungsi "clock"
  React.useEffect(() => {
    clock();
  }, [play, timeLeft, timeout]);

  // Fungsi untuk memformat waktu yang tersisa
  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Menentukan judul berdasarkan jenis waktu saat ini (Session/Break)
  const title = timingType === "SESSION" ? "Session" : "Break";

  // Mengembalikan tampilan antarmuka pengguna (UI) React
  return (
    <div>
      <div className="wrapper">
        <div className="break-session-length">
          <div>
            <p id="break-label">Break</p>
            <div id="counter">
              <button
                disabled={play}
                onClick={handleBreakDecrease}
                id="break-decrement"
              >
                <DashCircleFill />
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button
                disabled={play}
                onClick={handleBreakIncrease}
                id="break-increment"
              >
                <PlusCircleFill />
              </button>
            </div>
          </div>
          <div>
            <p id="session-label">Session</p>
            <div id="counter">
              <button
                disabled={play}
                onClick={handleSessionDecrease}
                id="session-decrement"
              >
                <DashCircleFill />
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button
                disabled={play}
                onClick={handleSessionIncrease}
                id="session-increment"
              >
                <PlusCircleFill />
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>
            <h3 id="time-left">{timeFormatter()}</h3>
          </div>
          <button onClick={handlePlay} id="start_stop">
            Start/Stop
          </button>
          <button onClick={handleReset} id="reset">
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default App;
