import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import Greeting from './Greeting';
import './Bio.css';

export default function Bio() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    window.goingBack = true;
  };

  // const onBack = () => {
  //   window.goingBack = true;
  // };

  // useEffect(() => {
  //   window.history.pushState(null, null, window.location.pathname);
  //   window.addEventListener('popstate', onBack);

  //   return () => {
  //     window.removeEventListener('popstate', onBack);
  //   };
  // }, []);

  return (
    <div className="Bio">
      <Greeting/>
      <span className="page">Page 2</span>
      <div className="btn">
        <button onClick={handleBack}>{`< Back`}</button>
      </div>
    </div>
  );
}
