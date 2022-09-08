import React from 'react';
import Typewriter from 'typewriter-effect';
import './Greeting.css';

export default function Greeting() {
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              Hi
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              {'.'}
            </h1>
            <p className="greeting-text-p subTitle" style={{ color: 'green' }}>
              <span style={{ color: 'green', fontSize: '110%' }}>
                <Typewriter
                  options={{
                    //strings: [`I'm ${greeting.full_name}.${" "}`],
                    autoStart: true,
                    //delay: 1000,
                    loop: true,
                    //deleteSpeed: 800,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .typeString(`<span style="color:yy ">I'm ..</span>`)
                      .pauseFor(300)
                      .deleteChars(2)
                      .typeString(
                        `<strong><span style="color:green">Manoj M</strong>.</span>`
                      )
                      .pauseFor(300)
                      .typeString(
                        `<br/><span style="color:orange">Full Stack Developer</span>,<span style="color:red"> <strong>Web UI</strong></span>`
                      )
                      .pauseFor(300)
                      .deleteChars(3)
                      .typeString(
                        `<strong><span style="color: #2ab0ee">/Mobile UI</span><span style="color: #2ab0ee;"><br/>Learner 😀</span></strong>`
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
