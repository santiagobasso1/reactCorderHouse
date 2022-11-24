import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola"}/> 
    <ItemCount stock={10}/>
    </>
  );
}

export default App;
