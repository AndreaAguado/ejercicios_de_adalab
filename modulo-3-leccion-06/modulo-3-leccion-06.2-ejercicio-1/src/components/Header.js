import '../styles/App.css';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {
  return (
    <header class="header">
        <Logo></Logo>
        <Menu></Menu>
    </header>
  );
};

export default Header;