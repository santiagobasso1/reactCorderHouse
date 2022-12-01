const consultarBDD = async()=>{
    //CUANDO USAMOS FETCH SIEMPRE ESTAMOS PARADOS EN "PUBLIC"
    const response = await fetch ('./json/productos.json')
    const productos = await response.json();
    return productos;
}
export default consultarBDD

