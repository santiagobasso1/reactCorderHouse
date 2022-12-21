import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CartContext";
const ItemDetail = ({producto}) => {
    const {darkMode} = useDarkModeContext();
    const {addItem} = useCarritoContext();
    const onAdd = (contador)=>{
        addItem(producto,contador);
    }


    return (

            <div className={`row g-0 ${darkMode ? 'cardProductoDetailDark' : 'cardProducto'}`}>
            <div className="col-md-4">
                <img className="imagenCard" src={producto.img} alt="" />
            </div>
            <div className="col-mb-8">
                <h5 className="card-title">{producto.nombreAMostrar}</h5>
                <p className="card-text">Producto: {producto.producto} </p>
                <p className="card-text">Marca: {producto.marca} </p>
                <p className="card-text">Precio: {new Intl.NumberFormat('de-DE').format(producto.precio)} </p>
                <p className="card-text">Stock: {producto.stock}</p>
                <ItemCount stock={`${producto.stock}`} onAdd={onAdd}/>    
                <button className="btn btn-secundary"><Link to="/cart" className="nav-link">Ir al Carrito</Link></button>
            </div>        
        </div>
        
    );
}

export default ItemDetail;
