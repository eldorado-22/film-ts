import './App.css';
import "./components/Header/style.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Route, Routes} from "react-router-dom";
import Index from "./components";
import Popular from "./pages/Popular/popular";
import {useState} from "react";
import TopRated from "./pages/Top-Rated/top-rated";
import NowPlaying from "./pages/Now-Playing/now-playing";
import DetailPage from "./pages/Detail-Pages/detail-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorsMovies from "./pages/Detail-Actors/Actors-Info";

function App() {
    const [dark, setDark] = useState(false)
    function getDark() {
        setDark(!dark)
    }

    // let  progress = document.getElementById('progressbar');
    // let totalHeight = document.body.scrollHeight - window.innerHeight;
    // window.onscroll = function (){
    //     let progressHeight = (window.pageYOffset /
    //     totalHeight) * 100;
    //     progress.style.height = progressHeight + "%"
    // }

    return (
        <div style={{
            background: dark ? '#623503' : 'black',
            color: dark ? 'black' : 'blue'
        }}>
            <div id="progressbar"></div>
            <div id="scrollPath"></div>
            <Header  getDark={getDark} dark={!dark}/>
            <Routes getDark={getDark} dark={!dark}>
                <Route path={"/"} element={<Index/>}  getDark={getDark} dark={dark}/>
                <Route path={"/popular"} element={<Popular/>}  getDark={getDark} dark={dark}/>
                <Route path={"/top-rated"} element={<TopRated/>}  getDark={getDark} dark={dark}/>
                <Route path={"/now-playing"} element={<NowPlaying/>}  getDark={getDark} dark={dark}/>
                <Route path={"/movies-info/:movieId"} element={<DetailPage/>}  getDark={getDark} dark={dark}/>
                <Route path={"/actor-info/:actorId"} element={<ActorsMovies/>} getDark={getDark} dark={dark}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
