import React from 'react';

function App() {
  const value = 'World';
  const p1 = <p id='hello'> Hello, {value}! </p>;
  const tb1 = <textarea id='textBox' name='textBox' placeholder='Enter your image url here:'></textarea>;
  const btnIa = <button name='imA'> Image analysis </button>;
  const btnIg = <button name='imG'> Image generation </button>;

  const buttons = <div className='buttons'>{btnIa} {btnIg}</div>;
  const body1 = <body> <div className='page'>{p1} {tb1} {buttons}</div> </body>;
  
  const page = <html>{body1}</html>;
  
  return page;
}

export default App;
