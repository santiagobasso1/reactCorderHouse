import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
                <button className='btn btn-dark'><Link className='nav-link' to={"/cart"}><i className="fas fa-shopping-cart fa-lg"></i><span className="contadorCarrito">0</span></Link></button>
        );
}

export default CartWidget;
