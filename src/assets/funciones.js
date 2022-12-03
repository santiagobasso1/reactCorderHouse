const consultarBDD = async(ruta)=>{
    //CUANDO USAMOS FETCH SIEMPRE ESTAMOS PARADOS EN "PUBLIC"
    const response = await fetch (ruta);
    const productos = await response.json();
    return productos;
}
export default consultarBDD

