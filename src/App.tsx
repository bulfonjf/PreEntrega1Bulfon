import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavBar />
      </div>
      <div className="container mx-auto">
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
