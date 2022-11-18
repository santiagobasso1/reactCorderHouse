import './navbar.css';
import categorias from '../Categorias/categorias.jsx';
import Categorias from '../Categorias/categorias.jsx';


const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div className="container">
        <a className="navbar-brand" href="./index.html">Inicio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <Categorias/>
    </div>
</nav>
    );
}

export default Navbar;
