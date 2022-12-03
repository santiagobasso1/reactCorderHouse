import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//COMPONENTES
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemList from './ItemList/ItemList';
import CartWidget from './CartWidget/CartWidget';
import Cart from './Cart/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
