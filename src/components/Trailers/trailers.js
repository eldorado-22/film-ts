import React, {useEffect, useState} from 'react';
import "./trailers.scss";
import axios from "axios";
import {ApiKey} from "../../ApiKey/ApiKey";
import {IoVideocam} from "react-icons/io5";

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

const Trailers = ({movieId}) => {
    const [trailers, setTrailers] = useState([])
    const getTrailers = async (key, id) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        const {data} = res
        setTrailers(data.results)
    }
    useEffect(() => {
        getTrailers(ApiKey, movieId)
    }, [])
    console.log(trailers)

    return (
        <div id="trailers" className="py-20">
            <div className="container">
                <div className="trailers flex overflow-x-auto py-6">
                    {
                        trailers.map((el) => (
                            <div className="trailers--group">
                                <iframe className="px-5 trailers--group__videos transition " width="560" height="300"
                                        src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                </iframe>
                                <div className="trailers--group__col"></div>
                                <h3 className="text-white text-xl py-5 text-center">{el.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailers;