import '../styles/App.css';

function App() {
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas:</h1>
      <form className="form" action="">
        <label htmlFor="ingredient1"><input type="checkbox" name="ingredient1" id="ingredient1" />Macarrones</label>
        <label htmlFor="ingredient2"><input type="checkbox" name="ingredient2" id="ingredient2" />Patatas</label>
        <label htmlFor="ingredient3"><input type="checkbox" name="ingredient3" id="ingredient3" />Nueces</label>
        <label htmlFor="ingredient4"><input type="checkbox" name="ingredient4" id="ingredient4" />Huevos</label>
        <label htmlFor="ingredient5"><input type="checkbox" name="ingredient5" id="ingredient5" />Cebolla</label>
        <label htmlFor="ingredient6"><input type="checkbox" name="ingredient6" id="ingredient6" />Cerveza</label>
      </form>
    </div>
  );
}

export default App;
