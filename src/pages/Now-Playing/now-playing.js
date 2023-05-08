import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../../ApiKey/ApiKey";
import {NavLink} from "react-router-dom";

const NowPlaying = ({dark}) => {

    const [nowPlaying, setNowPlaying] = useState([])
    const getNowPlaying = async () => {
        const res = await  axios (`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=4`)
        const {data} = res
        setNowPlaying(data.results)
    }
    useEffect(() => {
        getNowPlaying()
    },[])

    console.log(nowPlaying)

    ///////////// SCROLL WINDOW ////////
    const [scroll, setScroll] = useState(0)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])

    return (
        <div id="nowPlaying" style={{
            background: scroll > 50 ? '#b22222' : '',
            backdropFilter: "blur(10px)",
        }}>
            <div className="container">
                <h1 style={{
                    color: scroll > 50  ? "#000" : ""
                }}  className="nowPlaying text-center pt-7 font-medium text-3xl">Welcome To
                    <span style={{
                        color: dark ? "aqua" : "red"
                    }}> Now Playing</span>
                </h1>
                <div className="popular  basis-1/5 flex-wrap">

                    {
                        nowPlaying.map(el => (
                            <div className="flex flex-col basis-1/4 px-5 py-8">
                              <NavLink to={`/movies-info/${el.id}`}>
                                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                       alt="img"/>
                              </NavLink>
                                <div className="nowPlaying--text">
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

export default NowPlaying;