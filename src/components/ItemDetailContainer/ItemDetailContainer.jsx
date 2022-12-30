import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../assets/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    
    const [producto,setProducto] = useState([]);
    const {id}=useParams();
    
    useEffect(() => {
        getProducto(id).then(prod =>setProducto(prod))      
    }, []); //MODELO NO ESTOY SEGURO SI VA ENTRE CORCHETES




    return (
        <div className="card cardProductoDetail itemDetail">
            <ItemDetail producto={producto}/>                        
        </div>
    );
}

export default ItemDetailContainer;
