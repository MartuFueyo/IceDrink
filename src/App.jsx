import './App.css';
import Cart from './Componets/Cart';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import ItemDetailContainer from './Componets/ItemDetailContainer';
import ItemListContainer from './Componets/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/Cart"} element={<Cart />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
