import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

export default function Home() {
    return(
        <>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a la tienda" />
        </>
    );
}