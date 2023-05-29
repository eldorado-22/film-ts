import React, {useEffect, useState} from 'react';
import "./style.scss";
import axios from "axios";
import {ApiKey} from "../../../ApiKey/ApiKey";
import {NavLink, useParams} from "react-router-dom";
import {BsInstagram} from "react-icons/bs";
import {SiTiktok} from "react-icons/si";
import {AiFillFacebook, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import ActorsInfoMovies from "../Actors-Movies";


// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US


const ActorsMovies = () => {
    const [actorsInfo, setActorsInfo] = useState({})
    const [textMore, setTextMore] = useState(300)
    const {actorId} = useParams()
    const getActorMovies = async (key, id) => {
        const res = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        const {data} = await res
        setActorsInfo(data)
    }
    useEffect(() => {
        getActorMovies(ApiKey, actorId)
    }, [])

    const clickText = (text) => {
        if (textMore === 300) {
            setTextMore(text.length)
        } else setTextMore(300)
    }
    // console.log(actorsInfo)

    const {profile_path, name, biography, birthday} = actorsInfo
    return (
        <>
            <div id="actorsMovies">
                <div className="container">
                    <div className="actorsMovies flex items-start py-20 px-12">
                        <img className="profile" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`}
                             alt="img"/>

                        <div className="actorsMovies--net text-white px-12 ">

                            <h1 className="text-3xl pb-5">{name} (<span className="text-gray-500"> {birthday}</span>)
                            </h1>

                            <div className="actorsMovies--net__social flex gap-2 items-center text-center">
                                <a title="Welcome Instagram from Eldorado.JM"
                                   className="instagram text-2xl text-red-700"
                                   href="https://www.instagram.com/zhumashevv_996/">
                                    <BsInstagram/>
                                </a>
                                <a title="Welcome TikTok from Eldorado.JM" className="tiktok text-2xl "
                                   href="https://www.tiktok.com/@iamedya_996?lang=ru-RU">
                                    <SiTiktok/>
                                </a>
                                <a title="Welcome Linkedin from Eldorado.JM" className="linkedin text-3xl text-blue-600"
                                   href="https://www.linkedin.com/in/eldorado-jumashevv-51a792259/">
                                    <AiFillLinkedin/>
                                </a>
                                <a title="Welcome YouTube from Eldorado.JM"
                                   className="youtube text-3xl text-center text-red-700"
                                   href="https://www.youtube.com/channel/UCM4GdMSYh-zgfNwlY27vTgg">
                                    <AiFillYoutube/>
                                </a>
                                <a title="Welcome Facebook from Eldorado.JM" className="facebook text-3xl text-blue-800"
                                   href="https://www.facebook.com/eldoradojumashevv/">
                                    <AiFillFacebook/>
                                </a>

                            </div>

                            <h5 className="text-gray-500 text-3xl py-2">Biography</h5>

                            <i className=""><span>{biography && biography.slice(0, textMore)}</span></i>

                            <div className="actorsBio--net__icons">
                                {biography && biography.length > 300 &&
                                    <i onClick={() => clickText(biography)}
                                       className="text-red-700 text-2xl font-semibold cursor-pointer">
                                        {textMore === 300 ? "Read More" : "Close Text"}
                                    </i>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ActorsInfoMovies id={actorId}/>
        </>
    );
};

export default ActorsMovies;