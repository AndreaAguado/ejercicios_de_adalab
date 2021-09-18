import '../styles/App.css';

function App() {
  const handleKeys = (ev) => {
    if(ev.keyCode === 'Enter'){
      ev.preventDefault();
    } 
    // let result = ev.key;
   console.log(ev.key)
    // return result;
    return false;
  }
  return (
    <div>
      <form action="">
      <input placeholder="Pulsa teclas aleatorias" onKeyUp = {handleKeys}></input>
      </form>
    </div>
  );
}

export default App;
