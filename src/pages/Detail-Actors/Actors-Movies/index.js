import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../../../ApiKey/ApiKey";
import {NavLink} from "react-router-dom";
import {IoVideocam} from "react-icons/io5";

const ActorsInfoMovies = ({id}) => {

    const [moviesActors, setMoviesActors] = useState([])

    // const {language} = useContext(LanguageContext)

    const getMoviesActors = async (id, key) => {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US}`)
        const {data} = await res
        setMoviesActors(data.cast)
    }

    useEffect(() => {
        getMoviesActors(id, ApiKey)
    }, [])

    console.log(moviesActors)

    return (
        <div id="actors">
            <div className="container">
                <h1 className="text-white text-3xl">Известность за</h1>
                <div className="actors flex flex-nowrap overflow-x-auto ">
                    {
                        moviesActors.filter(m => m.poster_path).map(moviesActors => (
                            <div className="actors--img py-10">
                                <div className="actors--img__group">
                                    <NavLink to={`/movies-info/${moviesActors.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${moviesActors.poster_path}`}
                                             alt="img" className="moviesActors--img__group"/>
                                    </NavLink>
                                    <IoVideocam className="text-center icons"/>
                                    <div className="actors--img__group--block"></div>
                                </div>
                                <h3 className="py-4 px-3 text-white text-2xl" style={{padding: "25px 0"}}>{moviesActors.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ActorsInfoMovies;