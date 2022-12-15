import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
const CartWidget = () => {
        const {getItemQuantity} = useCarritoContext();
        
        return (
                        <button className='btn btn-dark'>
                                <Link className='nav-link' to={"/cart"}>
                                        <i className="fas fa-shopping-cart fa-lg"></i>
                                        {getItemQuantity() > 0 && <span className="contadorCarrito">{getItemQuantity()}</span>}
                                        <span className="contadorCarrito"></span>
                                </Link>
                        </button>
                );
}

export default CartWidget;
