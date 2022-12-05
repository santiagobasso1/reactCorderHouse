import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({producto}) => {
    return (
            <div className="card cardProducto" style={{width: '18rem'}}>
            <img src={`../img/${producto.img}`}className="card-img-top imagenCard" alt="..." />
                <div className="card-body cardBody">
                    <h5 className="card-title">{`${producto.modelo}`}</h5>
                    <p className="card-title">Precio: $ {new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <p className="card-title">Fabricante: {`${producto.marca}`}</p>
                    <button><Link className='nav-link' to={`/producto/${producto.modelo}`}>Ver Producto</Link></button>
                </div>
            </div>
    );
}

export default Item;
