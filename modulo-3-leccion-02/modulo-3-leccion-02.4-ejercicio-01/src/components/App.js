import '../styles/App.css';
import {useState} from 'react';

function App() {
  let cont;
  const[value, setValue] = useState(0);
  const adderHandle = (ev) => {
    cont = value + 1;
    return setValue(cont);
  } 
  const substractHandle = (ev) =>{
    cont = value - 1;
    return setValue(cont);
  }
  const reset = (ev) =>{
    setValue(0);
  } 
  return (
    <div>
      <h1>Contador: {value} </h1>
      <button className="button" onClick={adderHandle}>Contador ++ </button>
      <button className="button" onClick={substractHandle}>Contador - - </button>
      <button className="button" onClick={reset}>Resetear</button>
    </div>
  );
}

export default App;
