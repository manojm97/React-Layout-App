import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page2');
  };

  return (
    <div className="footer">
      <button className="footer-text" onClick={handleClick}>
        {`Go to page 2 >`}
      </button>
    </div>
  );
}
