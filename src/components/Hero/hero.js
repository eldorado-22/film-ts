import React, {useState} from 'react';
import "./style.scss";
import home from "./../../images/home.png"
// import {MdSavedSearch} from "react-icons/md";
// import {useNavigate} from "react-router-dom";

const Home = ({el }) => {
    // const [value, setValue] = useState("")
    // const navigate = useNavigate()

    // function goToSearch(){
    //     navigate(`/search/${value}`)
    // }


    return (
        <section id="home" style={
            {
                backgroundImage: ""
            }
        }>
            <div className="container">
                <div className="home">
                    <div className="home--text__btn-group flex pl-10 py-20">
                        {/*<input  onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}*/}
                        {/*        onChange={(e) => setValue(e.target.value)}*/}
                        {/*        type="text" className="w-[100%] rounded py-1.5 text-gray-500 p-4"*/}
                        {/*       placeholder="Search Movies"/>*/}
                        {/*<MdSavedSearch onClick={() => goToSearch()} className="text-4xl text-red-700 relative top-0 right-10"/>*/}
                    </div>
                    <a href="https://store-toolkit.vercel.app/" target="_blank">
                        <button className="mx-5 px-10 rounded-xl py-2 text-2xl text-white bg-red-800 shadow-xl shadow-orange-500/50">Go To SHOP</button>
                    </a>
                    <div className="home--images py-10  gap-6">
                        <img src={home} alt="img"/>
                        <img
                            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/lBX2EklMBEK5I0OIJWVJFr3DtmS.jpg"
                            alt="img"/>
                        <img
                            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg"
                            alt="img"/>
                        <img
                            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/sx9AV4zhzAwS9XIcRh5f9GFzXS9.jpg"
                            alt="img"/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;