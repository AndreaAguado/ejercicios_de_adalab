import '../styles/App.css';

function App() {
  return (
    <div className="body js_body">
      
      <h1 className="title">Adivina el número</h1>
      <form className="form" action="/" method="POST"> 
          <label className="label" htmlFor="userNumber">Introduce aquí tu número:</label>
          <input placeholder="Número entre 1 y 100" className="input js_input" id="userNumber" type="text"></input>
          <div className="buttons-container">
              <input className="button js_button" type="submit" value="Prueba"></input>
              <input className="button js_reset" type="reset" value="Reset"></input>
          </div>
      </form>
      <p className="container hint js_hint">Pista: Escribe el número y dale a Prueba</p>
      <p className="container attempts js_attempts">Número de intentos: 0</p>
    </div>
  );
}

export default App;
