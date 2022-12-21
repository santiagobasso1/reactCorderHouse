import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import consultarBDD from '../../assets/funciones.js'
import './ItemListContainer.css'
import { cargarBDD } from '../../assets/firebase';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria}=useParams();

    useEffect(() => {
        if (categoria){
            consultarBDD('../json/productos.json').then(products => {
            const productList  = products.filter(prod => prod.stock > 0).filter(prod=> prod.idCategoria===categoria);
            const cardProductos = ItemList({productList})
            setProductos(cardProductos);
            });
        }else{
            consultarBDD('./json/productos.json').then(products => {
            const productList  = products.filter(prod => prod.stock > 0);
            const cardProductos = ItemList({productList})
            setProductos(cardProductos); 
        });
    }

    //cargarBDD().then(productos=> console.log(productos));
    }, [categoria]);
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
    );
}

export default ItemListContainer;
