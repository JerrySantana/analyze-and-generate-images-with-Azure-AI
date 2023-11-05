import React from 'react';

function App() {
  const value = 'World';
  const p1 = <p> Hello {value} </p>;
  const titles = <title> Image analysis and generation. </title>;
  const tb1 = <textarea> Enter your image url here: </textarea>;
  const btnIa = <button> Image analysis </button>;
  const btnIg = <button> Image generation </button>;
  const page = <div> titles p1 tb1 btnIa btnIg </div>;
  
  return page;
}

export default App;
