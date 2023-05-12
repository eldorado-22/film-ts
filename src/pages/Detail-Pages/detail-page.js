import React, {useEffect, useState} from 'react';
import "./details.scss";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ApiKey} from "../../ApiKey/ApiKey";
import {AiOutlineFullscreen} from "react-icons/ai";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {FaListUl} from "react-icons/fa";
import {FiStar} from "react-icons/fi";
import DetailActors from "../Detail-Actors/detail-actors";
import Trailers from "../../components/Trailers/trailers";


const DetailPage = () => {
    const [details, setDetails] = useState({})
    const [modal, setModal] = useState(false)
    const {movieId} = useParams()
    const getDetails = async (id, key) => {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            const {data} = await res
            setDetails(data)
        } catch (e) {
            console.log(e, 'error')
        }
    }

    useEffect(() => {
        getDetails(movieId, ApiKey)
    }, [])
    const {poster_path, title, backdrop_path, vote_average, overview, release_date, tagline} = details

    console.log(details)
    return (
        <>
            <div id="details" style={{
                background: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat center/cover`,
                minHeight: "100vh"
            }} className="pl-20 py-20">
                <div className="container">
                    <div className="details flex justify-between pt-20">
                        <div className="details--images w-[80%]">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                                 alt="img" className=""/>

                            <div className="details--images__text">
                                <h2 className="textTwo text-gray-400 text-xl text-center flex items-center">
                                    <AiOutlineFullscreen className="pr-1 text-3xl text-white"/> Расширить
                                </h2>
                            </div>
                        </div>


                        <div className="details--text px-10 ">

                            <h1 className="text text-3xl font-medium ">
                                {title}
                                <span className="text-gray-400"> ({release_date})</span>
                            </h1>

                            <ul className="details--text__rain flex items-center ">

                                <a href="#" className="list-two text-white" title="Разбор рейтинга 587 оценок">
                                    <p className="text-white">{Math.floor(vote_average * 10)}%</p>
                                </a>

                                <a href="#" title="Войти для создания и правки своих списков"
                                   className="list text-white">
                                    <FaListUl/>
                                </a>

                                <a href="#" title="Войти для добавления этого фильма в свой список избранных"
                                   className="heart text-white ">
                                    <BsFillSuitHeartFill/>
                                </a>
                                <a href="#" title="Войти для для оценки этого фильма" className="star text-white">
                                    <FiStar/>
                                </a>
                            </ul>
                            <i className="text-gray-300 text-xl  ">{tagline}</i>

                            <div className="pt-2">
                                <h2 className="text-red-700 text-3xl font-semibold py-3">Обзор</h2>
                                <p className="text text-white text-xl">{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailActors movieId={movieId}/>
            <Trailers movieId={movieId}/>
        </>
    );
};

export default DetailPage;