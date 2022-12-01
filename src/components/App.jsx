import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola"}/> 
    </>
  );
}

export default App;
