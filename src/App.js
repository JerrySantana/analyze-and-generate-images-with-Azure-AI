import React from 'react';
import { analyzeImage } from './azure-image-analysis.js';

function App() {
  var [response, setResponse] = React.useState(null);
  var [image, setImage] = React.useState("");
  return (
    <div className="App">
      <h1>Hello, person!!</h1>
      
      <textarea id='textBox' name='textBox' placeholder='Enter your image url here:'></textarea>
      
      <div className='buttons'>
      
        <button name='imA' onClick={
          () => (document.getElementById('textBox').value !== "") ? 
          analyzeImage(document.getElementById('textBox').value)
          .then(alert("Analyzing..."))
          .then(response => setResponse(response))
          .then(setImage(document.getElementById('textBox').value)) : 
          alert("Give me something to analyze...")}>
            Analyze. </button>
      </div>

      <hr />
      <LoadImage img = {image}/>
      
      <DisplayResults id='results' responseJson = {(response !== null) ? response : "Nothing to analyze..."} />
    </div>
  );
}

function LoadImage({ img }) {
  return (
    <img id='image' src={img} alt="This would be a loading sh**, but I couldn't figure how to add one. So, give me your url and this will change. :)" />
  )
}

function DisplayResults({ responseJson }) {
  return (
    <div>
      <h2>Results:</h2>
      <pre>{JSON.stringify(responseJson, null, 2)}</pre>
    </div>
  );
}


export default App;
