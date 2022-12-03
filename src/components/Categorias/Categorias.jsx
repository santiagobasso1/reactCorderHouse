import './Categorias.css';
import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/1"}>Procesadores</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/2"}>Graficas</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/categoria/3"}>Motherboards</Link></button>
            </div>
        </div>
    );
}

export default Categorias;
