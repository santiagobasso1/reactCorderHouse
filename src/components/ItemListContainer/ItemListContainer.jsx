import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import consultarBDD from '../../assets/funciones.js'
import './ItemListContainer.css'
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria}=useParams();

    useEffect(() => {
        if (categoria){
            consultarBDD('../json/productos.json').then(products => {
            const productList  = products.filter(prod => prod.stock > 0).filter(prod=> prod.idCategoria===categoria);
            setProductos(productList);
            });
        }else{
            consultarBDD('./json/productos.json').then(products => {
            const productList  = products.filter(prod => prod.stock > 0);
            setProductos(productList); 
        });
    }
    }, [categoria]);
    return (
        <div className= 'row cardProductos' >
            <ItemList productList={productos}/>
        </div>
    );
}

export default ItemListContainer;
