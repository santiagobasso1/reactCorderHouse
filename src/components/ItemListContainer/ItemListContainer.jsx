import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import consultarBDD from '../../assets/funciones.js'
import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(productList => {
            const cardProductos = ItemList({productList});
            setProductos(cardProductos);
        });
    }, []);
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
    );
}

export default ItemListContainer;
