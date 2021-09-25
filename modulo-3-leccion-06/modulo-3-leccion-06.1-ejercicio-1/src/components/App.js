import '../styles/App.css';
import adalabLogo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <div>
      <header class="header">
        <a target="_blank" href="https://adalab.es/" rel="noreferrer">
          <img title="Adalab" class="logo" src={adalabLogo} alt="logo adalab"/>
        </a>
        <nav >
            <ul class="links-container">
                <li><a title="Blog" class="link" href="https://adalab.es/blog/" target="_blank" rel="noreferrer">Blog</a></li>
                <li><a title="Contacto" class="link" href="./contact.html" target="_blank">Contacto</a></li>
            </ul>
        </nav>
      </header>
      <main class="main">
          <h1 class="title">Creando diversidad digital </h1>       
      </main>
    </div>
  );
}

export default App;
