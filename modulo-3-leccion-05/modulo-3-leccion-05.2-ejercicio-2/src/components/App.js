import '../styles/App.css';
import callToApi from '../services/api';
import {useState, useEffect} from 'react';

function App() {
  const [series, setSeries] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    callToApi(searchName).then(response => {
      setSeries(response);
      console.log(response);
    });
  }, [searchName]);

  // Eventos

  const handleSearchName = ev => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };

  const renderSeries = () => {
    console.log(series);
    return series.map((serie, index) => {
      return <li key={serie.id}>Nombre: {serie.name}
      <img src={serie.image} alt={serie.name} />
      </li>;
    });
  };
  return (
    <div>
      <h1>Buscador de series</h1>
      <form action="">
        <input onChange={handleSearchName} type="text" value={searchName}/>
      </form>
      <ul>
        {renderSeries()}
      </ul>
    </div>
  );
}

export default App;
