import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div className="row g-0" style={{width: '18rem'}}>
            <div className="col-md-4">
                <img className="imagenCard" src={`../img/${producto.img}`} alt="" />
            </div>
            <div className="col-mb-8">
                <h5 className="card-title">{producto.modelo}</h5>
                <p className="card-text">Producto: {producto.producto} </p>
                <p className="card-text">Marca: {producto.marca} </p>
                <p className="card-text">Precio: {new Intl.NumberFormat('de-DE').format(producto.precio)} </p>
                <p className="card-text">Stock: {producto.stock}</p>
                <ItemCount stock={`${producto.stock}`}/>    
                <button className="btn btn-secundary">Ir a Pagar</button>
            </div>        
        </div>
    );
}

export default ItemDetail;
