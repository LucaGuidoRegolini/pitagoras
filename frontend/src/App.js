import React, {useState} from "react";

import img from './img/svg-triangulo.svg'

import api from "./Services/api";
import './App.css';
  

function App() {

  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')

  async function HandleSubmit(e) {
    e.preventDefault();

    const data = {
      a,
      b,
      c,
  }
    console.log(data)
  

    api.post("/", data).then(data=>{
      console.log(data.data)
    })
  
  }

  return (
    <div className="App">

      <div className="body">
        
        <img className="img" src= {img} width="250" height="120"/>

        <form  onSubmit={HandleSubmit} className="form">
          <label className="label" for="fname">Cateto B </label><br/>
          <input className="input" type="text" id="b"
            placeholder='Cateto B'
            value={b}  onChange={e => setB(e.target.value)} name="Cateto B"
          /><br/><br/>

          <label className="label" for="lname">Cateto C </label><br/>
          <input className="input" type="text" id="c"
            placeholder='Cateto C'
            value={c} onChange={e => setC(e.target.value)} name="Cateto C"
          /><br/><br/>

          <label className="label" for="lname">Hipotenusa A </label><br/>
          <input className="input" type="text" id="a" 
            placeholder='Hipotenusa A'
            value={a} onChange={e => setA(e.target.value)} name="Hipotenusa"
          /><br/><br/>

          <input className="button" type="submit" value="Calcular"/>
        </form>
        
      </div>
    </div>
  );
}

export default App;
