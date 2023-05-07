import './App.css';
import "./components/Header/style.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Route, Routes} from "react-router-dom";
import Index from "./components";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Index/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
