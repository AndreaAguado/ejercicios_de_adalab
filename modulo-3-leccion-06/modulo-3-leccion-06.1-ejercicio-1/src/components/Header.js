import '../styles/App.css';
import adalabLogo from '../images/adalab-logo-155x61.png';
import Menu from './Menu';

const Header = () => {
  return (
    <div>
        <header class="header">
        <a target="_blank" href="https://adalab.es/" rel="noreferrer">
        <img title="Adalab" class="logo" src={adalabLogo} alt="logo adalab"/>
        </a>
        <Menu></Menu>
        </header>
    </div>
  );
};

export default Header;