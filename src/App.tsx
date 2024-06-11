import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CartView from "./components/CartView";
import Categories from "./components/Categories";



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
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:categoryId" element={<Home />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </main>
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;