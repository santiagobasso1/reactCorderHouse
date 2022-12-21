import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import consultarBDD from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);
    const {modelo}=useParams();
    
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const prod = productos.find(product => product.modelo === modelo);
            setProducto(prod);
        })
    }, [modelo]); //MODELO NO ESTOY SEGURO SI VA ENTRE CORCHETES
    return (
        <div className="card cardProductoDetail itemDetail">
            <ItemDetail producto={producto}/>         
               
        </div>
    );
}

export default ItemDetailContainer;
