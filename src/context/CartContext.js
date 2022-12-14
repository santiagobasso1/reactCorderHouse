import { useContext, useState, createContext } from "react";

const carritoContext = createContext();

export const useCarritoContext = useContext(carritoContext);

export const carritoProvider = (props) =>{
    const [carrito, setCarrito] = useState([]);
    const isInCart = (id) =>{
        return carrito.find(producto => producto.id = id);
    }
    const addItem = (producto, cantidad)=>{
        if (isInCart(producto.id)){
            const indice = cart.findIndex(prod => prod.id === producto.id);
            const aux = [...carrito];
            aux[indice].cant = cantidad;
            setCarrito(aux);
        }else{
            const nuevoProducto = {
                ...producto,
                cant:cantidad
            }
            setCarrito([...carrito,nuevoProducto]);

        }


    }
}