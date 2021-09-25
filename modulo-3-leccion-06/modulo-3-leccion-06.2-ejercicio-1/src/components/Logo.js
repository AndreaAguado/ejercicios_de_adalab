import '../styles/App.css';
import adalabLogo from '../images/adalab-logo-155x61.png';

const Logo = () => {
    return(
        <a target="_blank" href="https://adalab.es/" rel="noreferrer">
        <img title="Adalab" class="logo" src={adalabLogo} alt="logo adalab"/>
        </a>
    );
};

export default Logo;