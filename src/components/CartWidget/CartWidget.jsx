import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <ul className='navbar-nav me-auto'>
            <li className='nav-link'> 
                <button className='btn btn-dark'><Link className='nav-link' to={"/cart"}>Carrito</Link></button>
            </li>
            <p>0</p>
        </ul>
        );
}

export default CartWidget;
