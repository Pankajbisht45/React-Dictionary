import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [word,setWord] = useState("");
  const [def,setDef] = useState(""); 
  let output = null;

  let handleChange = (evt) => {
    setWord(evt.target.value);
  }
  let handleClick = () => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ac62053a-4ab7-4566-9e7f-c3318da617ae`)
    .then(response => response.json())
    .then(data => {
      setDef(data[0]);
    });
    setDef("");
  }
  if(def){
    output = (
      <>
        <p className="fw-bold ans">Meaning : <span className="text-secondary text-capitalize">{def.shortdef}</span></p>
        <p className="fw-bold ans">Part of Speech : <span className="text-secondary text-capitalize">{def.fl}</span></p>
      </>
    )
  }
  else{
    output = (
      <>
        <h1 className="fw-bold text-center">No Word Found...!</h1>
      </>
    )
  }
  return(
    <>
      <div className="main">
        <div className="dic p-5">
          <h1 className="text-center fw-bold">My Dictionary</h1>
          <input 
            type="text" 
            placeholder="Enter your word" 
            value={word} 
            className="mx-auto d-block txt ps-3 mt-4 shadow-lg bg-body"
            onChange={handleChange} 
          />
          <br />
          <input 
            type="button" 
            value="Search" 
            className="mx-auto d-block btn btn-primary shadow  search"
            onClick={handleClick} 
          />
          <br />
          {output}
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  )
}
export default App;