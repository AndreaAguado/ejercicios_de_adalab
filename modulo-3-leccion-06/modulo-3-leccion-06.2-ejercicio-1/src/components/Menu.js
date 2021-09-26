import '../styles/App.css';
import Link from './Link';

const Menu = () => {
    return(
        <nav >
            <ul className="links-container">
                <Link text="Blog" title="Blog" class="link" href="https://adalab.es/blog/" target="_blank" rel="noreferrer"></Link>
                <Link text="Contacto" title="Contacto" class="link" href="./contact.html" target="_blank"></Link>
            </ul>
        </nav>
    )
}

export default Menu;