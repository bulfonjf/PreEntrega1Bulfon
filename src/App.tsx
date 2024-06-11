import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CartView from "./components/CartView";
import Categories from "./components/Categories";
import {CartContext} from "./contexts/CartContext";
import { CartItem } from "./model/cartItem";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="grid-container bg-slate-100">
        <NavBar />
        
        <aside>
          <Categories />
        </aside>
        
        <main>
        <CartContext.Provider value={[] as CartItem[]}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:category" element={<Home />} />
              <Route path="/cart" element={<CartView showModal={false} toggle={() => {}} />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          </CartContext.Provider>
        </main>
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;