import '../styles/App.css';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => {
  return (
    <div>
        <header class="header">
            <Logo></Logo>
            <Menu></Menu>
        </header>
    </div>
  );
};

export default Header;