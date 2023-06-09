import React, {useEffect, useState} from 'react';
import "./style.scss";
import axios from "axios";
import {ApiKey} from "../../ApiKey/ApiKey";
import {NavLink, useNavigate} from "react-router-dom";
import {MdSavedSearch} from "react-icons/md";

// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
const TopRated = ({dark}) => {
    const [topRated, setTopRated] = useState([])
    const getTopRated = async () => {
        const res = await axios(` https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=2`)
        const {data} = res
        setTopRated(data.results)
    }
    useEffect(() => {
        getTopRated()
    }, [])
    console.log(topRated)
    /////////// SEARCH //////////////////////
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
        <div id="topRated" style={{
            background: scroll > 50 ? '#692305' : '',
            backdropFilter: "blur(10px)",
        }}>
            <div className="container">
                <h1 className="text-center pt-7 font-medium text-3xl">Welcome To
                    <span className="" style={{
                        color: dark ? "aqua" : "red"
                    }}> Top Rated</span>
                </h1>
                <div className="home--text__btn-group flex pl-10 py-6">
                    <input  onKeyDown={(e) => {if (e.key === 'Enter'){goToSearch()}}}
                            onChange={(e) => setValue(e.target.value)}
                            type="text" className="w-[100%] rounded py-1.5 text-gray-500 p-4"
                            placeholder="Search Movies"/>
                    <MdSavedSearch className="text-4xl text-red-700 relative top-0 right-10"/>
                </div>
                <div className="topRated flex justify-center basis-1/5 flex-wrap items-center   ">
                    {
                        topRated.map(el => (
                            <div className="flex basis-1/4 items-center flex-wrap px-5 py-8">
                                <NavLink to={`/movies-info/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                         width={600} alt="img"/>
                                </NavLink>

                                <div className="topRated--text">
                                    <h1 style={{
                                        color: scroll > 50 ? "#000" : ""
                                    }} className="text-center text-2xl py-2 font-semibold ">{el.title}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;