import './ItemCount.css'
import { useState } from "react";
const ItemCount = ({stock}) => {
    const [cantidad, setCantidad]=useState(1);
    const sumar =()=> {
        if (cantidad<10 && cantidad<stock){
            setCantidad(cantidad+1)
        }

    }
    const restar =()=>{
        if (cantidad>1){
            setCantidad(cantidad-1)
        }
    }
    const agregar= ()=>{
        console.log('Hola');
    }
    return (
        <div>
            <div className="botonesMasMenosCantidad">
            <button className="btn btn-dark botonMenos" onClick={()=> restar()}>-</button>
            {cantidad}
            <button className="btn btn-dark botonMas" onClick={()=> sumar()}>+</button>
            </div>
            <div>
            <button className="btn btn-primary" onClick={()=> agregar()}>Agregar Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
