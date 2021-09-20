import '../styles/App.css';
import {useState} from 'react';
function App() {
const [text, setText] = useState('');
  const translateText = (ev) => {
    ev.preventDefault();
    let text = ev.target.value;
    return setText(text.replace(/[aeiou]/gi, 'i'));    
  }
  return (
    <div>
      <h1>Traductor MIMIMI</h1>
      <form className="form" action="">
        <label htmlFor="toBeTranslated">¿Qué quieres traducir?</label>
        <textarea onChange={translateText} name="toBeTranslated" id="toBeTranslated" cols="30" rows="10"></textarea>
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App;
