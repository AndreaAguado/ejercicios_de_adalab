import '../styles/Header.scss';
import '../styles/variables.scss';
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