import React from 'react';

function App() {
  const value = 'World';
  const p1 = <p id='hello'> Hello {value} </p>;
  const titles = <title id='title'> Image analysis and generation. </title>;
  const tb1 = <textarea id='textBox'> Enter your image url here: </textarea>;
  const btnIa = <button id='imA'> Image analysis </button>;
  const btnIg = <button id='imG'> Image generation </button>;
  const page = <div className='page'>{titles} {p1} {tb1} {btnIa} {btnIg}</div>;
  
  return page;
}

export default App;
