import React, { useState, useEffect } from 'react';
import './Header.css';
import Container from './Container';
import Footer from './Footer';

export default function Header() {
  const [checked, setChecked] = useState();
  var [date, setDate] = useState(new Date());
  const [curr, setCurr] = useState('');
  const [border, setBorder] = useState();

  const handleCheck1 = (e) => {
    setChecked(true);
    setCurr('center');
  };

  const handleCheck2 = (e) => {
    setChecked(false);
    setCurr('lower');
  };

  useEffect(() => {
    if (window.goingBack) {
      handleCheck1();
      setBorder(true);
    }
  }, []);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="header">
      <div className="header-text">
        Position :
        <label>
          <input
            type="radio"
            name="center"
            value="center"
            checked={true === checked}
            onChange={handleCheck1}
          />
          Center
        </label>
        <label>
          <input
            type="radio"
            name="lower"
            value="lower"
            checked={false === checked}
            onChange={handleCheck2}
          />
          Lower Right
        </label>
        <span className="timer">{date.toLocaleTimeString()}</span>
        <span className="key">
          Press Esc key to hide window. Enter to show it again
        </span>
      </div>
      <Container curr={curr} border={border} />
      <Footer />
    </div>
  );
}
