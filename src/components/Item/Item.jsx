import './Item.css';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext();
    return (
            <div className={`card ${darkMode ? 'cardProductoDark' : 'cardProducto'}`}>
            <img src={`../img/${producto.img}`}className="card-img-top imagenCard" alt="..." />
                <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                    <h5 className="card-title">{`${producto.nombreAMostrar}`}</h5>
                    <p className="card-title">Precio: $ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <p className="card-title">Fabricante: {`${producto.marca}`}</p>
                    <button><Link className='nav-link' to={`/producto/${producto.modelo}`}>Ver Producto</Link></button>
                </div>
            </div>
    );
}

export default Item;
