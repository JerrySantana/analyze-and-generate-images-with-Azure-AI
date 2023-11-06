import React from 'react';
import analyzeImage from './azure-image-analysis.js';

function App() {
  const value = 'World';
  const p1 = <p id='hello'> Hello, {value}! </p>;
  const tb1 = <textarea id='textBox' name='textBox' placeholder='Enter your image url here:'></textarea>;
  const btnIa = <button name='imA'> Image analysis </button>;
  const btnIg = <button name='imG'> Image generation </button>;
  btnIa.onclick = function() {
    const url = document.getElementById('textBox').value;
    const result = analyzeImage(url);
    console.log(result);
  }
  const buttons = <div className='buttons'>{btnIa} {btnIg}</div>;
  const body1 = <body> <div className='page'>{p1} {tb1} {buttons}</div> </body>;
  
  const page = <html>{body1}</html>;
  
  return page;
}

export default App;
