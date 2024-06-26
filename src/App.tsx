import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CartView from "./components/CartView";
import Categories from "./components/Categories";
import Checkout from "./components/Checkout";
import { CartProvider } from './contexts/cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <div className="grid-container bg-slate-100">
          <NavBar />
          
          <aside className="pr-5">
            <Categories />
          </aside>
          
          <main>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:category" element={<Home />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          
        </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;