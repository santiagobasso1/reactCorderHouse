import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Categorias from '../Categorias/Categorias.jsx';
import { Link } from 'react-router-dom';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Navbar = () => {
    const {darkMode} = useDarkModeContext();
    return (
  <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${darkMode ? 'navbarPersonal' : 'bg-dark'}`}>
    <div className="container-fluid">
        <button className='botonPrincipalNavBar'><Link className='nav-link' to={"/"}>RTX Pol</Link></button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <Categorias/>
        <CartWidget/>
        <BotonDarkMode/>
    </div>
</nav>
    );
}

export default Navbar;
