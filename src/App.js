import React from 'react';

function App() {
  const value = 'World';
  const div1 = <div> 'Hello {value}' </div>;
  const titles = <title> 'Image analysis and generation.' </title>;
  const tb1 = <textarea> 'Enter your image url here:' </textarea>;
  const btnIa = <button> 'Image analysis' </button>;
  const btnIg = <button> 'Image generation' </button>;
  const page = [titles, div1, tb1, btnIa, btnIg];
  
  return page;
}

export default App;
