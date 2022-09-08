import React, { useState, useEffect } from 'react';
import './Container.css';
import Draggable from 'react-draggable';

export default function Container({ curr, border }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [close, setClose] = useState(true);

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStop = (data) => {
    // console.log(data.x,position.x,data.y,position.y)
    // setPosition({ x: data.x - position.x, y: data.y - position.y });
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setClose(false);
      }
    };

    const handleEnter = (event) => {
      if (event.keyCode === 13) {
        setClose(true);
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('keydown', handleEnter);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('keydown', handleEnter);
    };
  }, []);

  return (
    <div className="layout">
      {close && (
        <Draggable
          position={{ x: position.x, y: position.y }}
          bounds="parent"
          onDrag={(e, data) => trackPos(data)}
          onStop={(e, data) => handleStop(data)}
        >
          <div
            className={
              curr == ''
                ? 'boxFloat'
                : curr === 'center' && border
                ? 'boxBorder'
                : curr === 'center'
                ? 'boxCenter'
                : 'boxRight'
            }
          >
            <span className="box-text">
              {curr == ''
                ? 'Floating...'
                : curr === 'center'
                ? 'Center'
                : 'Lower Right'}
            </span>
            {/* <div>
              x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
            </div> */}
            <span className="box-drag">Drag me around...</span>
          </div>
        </Draggable>
      )}
    </div>
  );
}
