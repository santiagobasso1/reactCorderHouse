import { Link } from "react-router-dom";
const Cart = () => {
    return (
        <div className="espaciadoNav">
            <h1>Acá irían los productos</h1>
            <button className="btn btn-primary bg-light"><Link to={'/checkout'}>Ir al checkout</Link></button>
        </div>
    );
}

export default Cart;
