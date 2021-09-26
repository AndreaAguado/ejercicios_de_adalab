import '../styles/App.scss';
import adalabLogo from '../images/adalab-logo-155x61.png';

const Logo = () => {
    return(
        <a target="_blank" href="https://adalab.es/" rel="noreferrer">
        <img title="Adalab" className="logo" src={adalabLogo} alt="logo adalab"/>
        </a>
    );
};

export default Logo;