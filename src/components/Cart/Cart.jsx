import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Cart = () => {
    const {darkMode} = useDarkModeContext();
    const {carrito,emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
                {carrito.length === 0 ? 
                <>
                <div className="espaciadoNav">
                    <h1>Carrito Vacío</h1>
                    <button className="btn btn-primary bg-light"><Link to={'/'}>Volver a Comprar</Link></button>
                </div>

                </>
                :
                <div className="container cartContainer espaciadoNav">
                {carrito.map((prod,indice) =>
                <div className={`card mb-3 ${darkMode ? 'text-white bg-secondary' : 'border-light'}`} key={indice} style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">Cantidad: {prod.cant}</p>
                        <p className="card-text">Precio unitario: $ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                        <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><i className="fas fa-trash-alt"></i></button>
                    </div>  
                </div>
                </div>
            </div>   
            )}

            <div className="divButtons">
                <p>Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
                <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link  className="nav-link" to={'/checkout'}>Checkout</Link></button>
            </div>   
        </div>

        }
    </>
    
);
}

export default Cart;