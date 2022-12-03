import './Categorias.css';
import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/procesadores"}>Procesadores</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/graficas"}>Graficas</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/motherboards"}>Motherboards</Link></button>
            </div>
        </div>
    );
}

export default Categorias;
