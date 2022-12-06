import React from "react";
import {useNavigate} from 'react-router-dom';
const Checkout = () => {

    const datosDelFormulario = React.useRef();
    let navigate = useNavigate();


    const consultarFormulario = (e)=>{
        e.preventDefault();
        console.log(datosDelFormulario);
        const datForm = new FormData(datosDelFormulario.current);
        const cliente = Object.fromEntries(datForm);
        console.log(cliente);
        e.target.reset();
        navigate("/");
    }
    return (
        <div className="container" >
            <form onSubmit={consultarFormulario} ref={datosDelFormulario} className="espaciadoNav formCheckout" >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="NombreYApellido" placeholder="Aqui ingrese su Nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">DNI</label>
                    <input type="number" className="form-control" name="DNI" placeholder="Aqui ingrese su DNI" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Contacto</label>
                    <input type="number" className="form-control" name="Contacto" placeholder="Aqui ingrese su Teléfono" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Dirección</label>
                    <input type="text" className="form-control" name="Direccion" placeholder="Aqui ingrese su Dirección Fisica" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input type="email" className="form-control" name="Email" placeholder="nombre@ejemplo.com" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
        
       

    );
}

export default Checkout;
