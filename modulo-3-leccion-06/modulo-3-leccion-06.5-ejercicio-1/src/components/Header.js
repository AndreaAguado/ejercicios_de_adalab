import '../styles/App.css';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
        <Logo></Logo>
        <Menu></Menu>
    </header>
  );
};

export default Header;