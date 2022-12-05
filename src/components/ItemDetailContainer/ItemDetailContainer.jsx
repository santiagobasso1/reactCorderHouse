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
    }, [modelo]);
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail producto={producto}/>         
               
        </div>
    );
}

export default ItemDetailContainer;
