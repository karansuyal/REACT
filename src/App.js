import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar title="TextUtils" toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
