import img from './img/svg-triangulo.svg'

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="body">
        
        <img className="img" src= {img} width="250" height="120"/>

        <form  className="form" action="">
          <label className="label" for="fname">Cateto B </label><br/>
          <input className="input" type="text" id="b" name="Cateto B"/><br/><br/>

          <label className="label" for="lname">Cateto C </label><br/>
          <input className="input" type="text" id="c" name="Cateto C"/><br/><br/>

          <label className="label" for="lname">Hipotenusa A </label><br/>
          <input className="input" type="text" id="hipotenusa" name="Hipotenusa"/><br/><br/>

          <input className="button" type="submit" value="Calcular"/>
        </form>
        
      </div>
    </div>
  );
}

export default App;
