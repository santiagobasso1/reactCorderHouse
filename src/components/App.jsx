import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//COMPONENTES
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import {DarkModeProvider} from '../context/DarkModeContext';
function App() {
  return (
    <>
    <BrowserRouter>
      <DarkModeProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/producto/:modelo' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </DarkModeProvider> 
    </BrowserRouter>
    </>
  );
}

export default App;
