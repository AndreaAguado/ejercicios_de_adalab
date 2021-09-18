import '../styles/App.css';
import {useState} from 'react';

function App() {

  const[mode, setMode] = useState('dayMode');

  const handleButton = () =>{
    if(mode === 'dayMode'){
      setMode('nightMode');
    }
    else{
      setMode('dayMode');
    }
  }

  const renderDarkModeText = () => {
    if(mode === 'nightMode'){
      let paragrap = <p className="message">Tienes activado el darkmode</p>;
      return paragrap;
    }
    else{
      return null;
    }
  }

  return (
    <div className={mode} >
      <div className="body">
        <header className="header">
          <h1>Título</h1>
        </header>
        <main className="main">
          <button onClick={handleButton}>Des / Activar dark mode</button>
          {renderDarkModeText()}
          <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt augue nisl, vel sodales diam viverra non. Duis eu consectetur ligula. Etiam sit amet lobortis eros, a volutpat neque. Aliquam erat volutpat. Nullam mollis lacinia neque, ac consectetur purus lacinia vel. Fusce suscipit finibus mi vel rutrum. Aliquam pulvinar, dolor vitae finibus consequat, dui mi pretium dolor, ut facilisis libero purus vitae elit. Cras pellentesque nulla vel commodo finibus. Phasellus porttitor imperdiet nisi, eu luctus est. Mauris sit amet suscipit turpis, vitae dapibus sapien. Quisque at viverra sem. Nam iaculis sed urna quis cursus.
          Suspendisse fringilla consectetur odio, vitae vestibulum enim mollis vel. Nam odio massa, sollicitudin ac justo vitae, porttitor hendrerit nisi. Nullam nec dolor nunc. Integer iaculis lacus justo, a sagittis enim elementum id. Curabitur tempor laoreet tincidunt. Nam aliquam tempor viverra. Nulla mauris tortor, fermentum vitae nulla a, mollis accumsan mi. In sit amet rutrum diam, facilisis egestas risus. Nam mattis metus vitae euismod efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis commodo ligula felis, sit amet ultrices nunc varius et. Donec scelerisque consequat vehicula. Donec arcu massa, suscipit a eleifend at, volutpat ac ex. In non blandit purus.
          Nullam elit dui, pulvinar vel nunc in, volutpat dictum felis. Proin et vestibulum justo. Morbi placerat interdum nulla et pulvinar. Curabitur mattis lorem non semper ultricies. Aenean maximus luctus turpis in sagittis. Praesent hendrerit, velit sed volutpat pharetra, tellus dui ornare eros, quis aliquet turpis massa ut nisi. Donec ultrices vitae neque id finibus. Curabitur porta eros id urna rutrum pretium. Vivamus hendrerit, odio vel congue pulvinar, justo sapien dictum dolor, sit amet euismod elit neque non lorem. Suspendisse vitae lorem neque. Proin blandit enim mattis nisl pulvinar pellentesque. Donec suscipit lectus a enim venenatis sodales. Pellentesque lorem neque, dapibus ut blandit sed, rhoncus in nunc. Suspendisse lacinia, magna a convallis finibus, lorem nibh volutpat dui, sit amet tincidunt nisi ex id ligula. Donec at nunc non enim feugiat mattis.
          Aliquam ac massa nec quam vestibulum tincidunt in eu ipsum. Praesent pharetra ex id turpis blandit porta. Quisque et nisl et odio placerat condimentum in et elit. In et mauris vitae lorem blandit suscipit. Mauris quis viverra sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus ante odio, a rutrum nibh scelerisque vitae. Duis dignissim, turpis id ultricies cursus, ligula mauris aliquam ligula, at tincidunt augue nulla ac enim. Maecenas suscipit dui non metus viverra lacinia. Integer maximus lectus sed libero faucibus, in euismod augue accumsan. Nunc suscipit, velit vitae mollis porttitor, tortor dui bibendum mi, eu vehicula justo turpis sit amet odio.
          Praesent eu purus ex. Aenean ac porta dui. Curabitur ut tempor ante. Donec eget luctus erat. Praesent id hendrerit sapien. Morbi felis dui, efficitur non ante eget, ullamcorper scelerisque odio. Mauris in ex aliquet, semper ex sagittis, scelerisque urna. In finibus gravida neque, vel pretium est blandit in. Aliquam placerat molestie elit, nec lobortis magna sollicitudin sagittis. Suspendisse blandit, velit quis rutrum eleifend, elit orci laoreet leo, eu semper odio eros quis est. Suspendisse ullamcorper lorem finibus, ultrices nisi a, venenatis neque.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
