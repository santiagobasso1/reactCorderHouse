import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
const Cart = () => {
    const {carrito} = useCarritoContext();
    return (
        <div className="espaciadoNav">
                {carrito.length === 0 ? 
                <>
                    <h1>Carrito Vacío</h1>
                    <button className="btn btn-primary bg-light"><Link to={'/'}>Volver a Comprar</Link></button>
                </>
                :
                <>
                    <h1>Productos</h1>
                    <button className="btn btn-primary bg-light"><Link to={'/'}>Seguir Comprando</Link></button>
                    <button className="btn btn-primary bg-light"><Link to={'/checkout'}>Ir al checkout</Link></button>
                </>
            }
        </div>
    );
}

export default Cart;
