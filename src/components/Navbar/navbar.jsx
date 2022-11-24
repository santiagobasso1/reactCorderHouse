import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Categorias from '../Categorias/Categorias.jsx';


const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div className="container">
        <button className='botonPrincipalNavBar'>RTX Pol</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <Categorias/>
        <CartWidget/>
    </div>
</nav>
    );
}

export default Navbar;
