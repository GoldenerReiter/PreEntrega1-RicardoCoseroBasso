import './App.css';
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemlistcontainer/itemlistcontainer";

function App() {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting={"Hola Mundo"}/>
        </>
    );
}

export default App;
