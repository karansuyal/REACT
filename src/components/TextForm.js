import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const handleRemoveSpaces = () => {
    setText(text.split(/\s+/).join(' '));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={`text-form-container ${props.darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-success mx-2" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button className="btn btn-warning mx-2" onClick={handleRemoveSpaces}>
        Remove Extra Spaces
      </button>
    </div>
  );
}
