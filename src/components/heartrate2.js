import React, { useEffect } from 'react';
import styles from './heartrate2.module.css';

// LoadingAnimation.js
const heartrate2 = () => {
    useEffect(() => {
      const lines = document.querySelectorAll("#front line");
      const svg = document.getElementById("loader");
  
      // Setting proper viewBox for the svg element
      const box = svg.getBBox();
      svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
  
      const run = () => {
        for (let i = 0; i < lines.length; i += 1) {
          const currLine = lines[i];
          setStyle(currLine, i);
          removeStyle(currLine, i);
        }
      };
  
      const setStyle = (currElement, i) => {
        // setting delay 0.08 * i for making sure the next animated element will get styles when the previous finishes
        setTimeout(() => {
          currElement.setAttribute(
            'style',
            `stroke: #ff4d4f; stroke-dasharray: ${currElement.getTotalLength()}px; stroke-dashoffset: ${currElement.getTotalLength()}px; animation: dash 0.1s ease-out forwards 0.1s; animation-delay: ${0.12 * i}s`
          );
        }, 7 * i);
      };
  
      const removeStyle = (element, i) => {
        setTimeout(() => {
          element.removeAttribute("style");
        }, 100 * (i + 5) - ((i + 5) * 10));
        // 100 * i + 2 - how fast we want to reset style. Each element is increasing its reset time with increasing i.
        // For making the animation smoother at the end, we can compensate by subtracting (i + 1) * 20.
        // Feel free to play around with constants and find your perfect timing.
      };
  
      run();
      setInterval(run, 2000);
  
      // Clean up the setInterval when the component is unmounted
      return () => clearInterval(run);
    }, []);
  
    return (
      <div id="container">
        <div className="loading">
          <svg xmlns="http://www.w3.org/2000/svg" id="loader">
            <g id="back">
              <line x1="88.5" x2="237" y1="316" y2="317" />
              <line x1="237" x2="244" y1="317" y2="290" />
              <line x1="244" x2="261" y1="290" y2="403" />
              <line x1="261" x2="275" y1="403" y2="225" />
              <line x1="275" x2="285" y1="225" y2="335" />
              <line x1="296.5" x2="454.5" y1="317" y2="317" />
              <line x1="286" x2="295" y1="334" y2="317" strokeDasharray="null" />
            </g>
  
            <g id="front">
              <line x1="88.5" x2="237" y1="316" y2="317" />
              <line x1="237" x2="244" y1="317" y2="290" />
              <line x1="244" x2="261" y1="290" y2="403" />
              <line x1="261" x2="275" y1="403" y2="225" />
              <line x1="275" x2="285" y1="225" y2="335" />
              <line x1="286" x2="295" y1="334" y2="317" />
              <line x1="296.5" x2="454.5" y1="317" y2="317" />
            </g>
          </svg>
        </div>
      </div>
    );
  };
  
  export default heartrate2;
  