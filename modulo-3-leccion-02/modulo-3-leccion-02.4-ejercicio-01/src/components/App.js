import '../styles/App.css';
import {useState} from 'react';

function App() {
  const[value, setValue] = useState(0);
  let cont = 0;
  const adder = () =>{
    cont++;
    return cont;
  }
  const adderHandle = (ev) => {
    console.log(cont);
    // cont++;
    let newValue = adder();
    
    // console.log(cont);
    // setValue(cont);
    console.log(newValue);
    setValue(newValue);
  } 
  // const substractHandle = (ev) => {
  //   cont--;
  //   setValue(cont);
  // }
  return (
    <div>
      <h1>Contador: {value} </h1>
      <button onClick={adderHandle}>Contador ++ </button>
      {/* <button onClick={substractHandle}>Contador -- </button> */}
    </div>
  );
}

export default App;
