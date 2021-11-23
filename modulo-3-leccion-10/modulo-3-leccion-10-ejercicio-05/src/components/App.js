import utils from '../services/utils';
const App = () => {
  let newWord = utils.paddingLeft('Andrea', 7, 'x');
  return (
    <div>
      <div>Hola mundo</div>
      <p>{newWord}</p>
    </div>
  );
};

export default App;