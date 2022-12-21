import './ItemCount.css'
import { useState } from "react";
const ItemCount = ({stock, onAdd}) => {
    const [cantidad, setCantidad]=useState(1);
    const sumar = () => cantidad < stock && setCantidad(cantidad + 1)

    const restar = () => cantidad > 1 && setCantidad(cantidad - 1)

    const addItemCart= ()=>onAdd(cantidad);

    return (
        <div>
            <div className="botonesMasMenosCantidad">
            <button className="btn btn-dark botonMenos" onClick={()=> restar()}>-</button>
            {cantidad}
            <button className="btn btn-dark botonMas" onClick={()=> sumar()}>+</button>
            </div>
            <button className="btn btn-primary" onClick={addItemCart}>Agregar Carrito</button>
        </div>
    );
}

export default ItemCount;
