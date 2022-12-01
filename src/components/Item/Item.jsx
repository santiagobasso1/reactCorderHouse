import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
const Item = ({producto}) => {
    return (
            <div className="card cardProducto" style={{width: '18rem'}}>
            <img src={`../img/${producto.img}`}className="card-img-top imagenCard" alt="..." />
                <div className="card-body cardBody">
                    <h5 className="card-title">{`${producto.modelo}`}</h5>
                    <p className="card-title">Precio: $ {`${producto.precio}`}</p>
                    <p className="card-title">Fabricante: {`${producto.marca}`}</p>
                    <ItemCount stock={`${producto.stock}`}/>
                </div>
            </div>
    );
}

export default Item;
