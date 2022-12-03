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
            let idCategoriaSeleccionada;
            //Utilizo un switch porque es la forma que se me ocurrió para que en el link aparezca el nombre de la categoria y no el numero
            switch (categoria) {
                case "procesadores":
                    idCategoriaSeleccionada=1;
                    break;

                case "graficas":
                    idCategoriaSeleccionada=2; 
                    break;
                case "motherboards":
                    idCategoriaSeleccionada=3;       
                    break;
                default:
                    idCategoriaSeleccionada=0;
                    break;
            }
            consultarBDD('../json/productos.json').then(products => {
            const productList  = products.filter(prod => prod.stock > 0).filter(prod=> prod.idCategoria===parseInt(idCategoriaSeleccionada));
            const cardProductos = ItemList({productList});
            setProductos(cardProductos);
            });
        }else{
            consultarBDD('./json/productos.json').then(products => {
            const productList  = products.filter(prod => prod.stock > 0);
            const cardProductos = ItemList({productList});
            setProductos(cardProductos); 
        });
    }
    }, [categoria]);
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
    );
}

export default ItemListContainer;
