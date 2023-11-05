import React from 'react';

function App() {
  const value = 'World';

  const titles = <title> Image analysis and generation. </title>;
//  const css1 = <link rel='stylesheet' href='index.css' />;

  const p1 = <p id='hello'> Hello {value} </p>;
  const tb1 = <textarea id='textBox' name='textBox' placeholder='Enter your image url here:'></textarea>;
  const btnIa = <button name='imA'> Image analysis </button>;
  const btnIg = <button name='imG'> Image generation </button>;

  const buttons = <div className='buttons'>{btnIa} {btnIg}</div>;
  const head1 = <head>{titles}</head>;
  const body1 = <body> <div className='page'>{titles} {p1} {tb1} {buttons}</div> </body>;
  
  const page = <html>{head1} {body1}</html>;
  
  return page;
}

export default App;
