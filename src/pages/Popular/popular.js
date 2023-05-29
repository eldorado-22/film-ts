import React, {useContext, useEffect, useState} from 'react';
import "./popular.scss";
import {ApiKey} from "../../ApiKey/ApiKey";
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";
import {MdSavedSearch} from "react-icons/md";
// import LanguageContext from "./../../Context";

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

const Popular = ({dark, el}) => {
    const [popular, setPopular] = useState([])
    // const {language} = useContext(LanguageContext)
    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`)
        const {data} = res
        setPopular(data.results)
    }
    useEffect(() => {
        getPopular()
    }, [])
    console.log(popular)


    ////////////// SEARCH //////////////////////
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    function goToSearch(){
        navigate(`/search/${value}`)
    }

    ///////////// SCROLL WINDOW ////////
    const [scroll, setScroll] = useState(0)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])


    return (
        <div id="popular" style={{
            background: scroll > 50 ? '#b22222' : '',
            backdropFilter: "blur(10px)",
        }}>
            <div className="container">
                <h1 style={{
                    color: scroll > 50  ? "#000" : ""
                }}  className="text-center pt-7 font-medium text-3xl">Welcome To
                    <span style={{
                        color: dark ? "aqua" : "red"
                    }}> POPULAR</span>
                </h1>
                <div className="home--text__btn-group flex pl-10 py-6">
                    <input onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}
                           onChange={(e) => setValue(e.target.value)}
                            type="text" className="w-[100%] rounded py-1.5 text-gray-500 p-4"
                            placeholder="Search Movies"/>
                    <MdSavedSearch onClick={() => goToSearch()} className="text-4xl text-red-700 relative top-0 right-10"/>
                </div>
                <div className="popular  basis-1/5 flex-wrap">

                    {
                        popular.map(el => (
                            <div className="flex flex-col basis-1/4 px-5 py-8">
                                <NavLink to={`/movies-info/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                         alt="img" />
                                </NavLink>

                                <div className="popular--text">
                                    <h1 style={{
                                        color: scroll > 50  ? "#000" : ""
                                    }} className="text-center py-2 font-semibold text-xl">{el.title}</h1>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Popular;