import './App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola"}/>
    </>
  );
}

export default App;
