import React, {useEffect, useState} from 'react';
import "./style.scss";
import {ApiKey} from "../../ApiKey/ApiKey";
import axios from "axios";
import {Link} from "react-router-dom";
import user from "./../../images/user.png"
import {IoPersonSharp} from "react-icons/io5";


const DetailActors = ({movieId}) => {
    const [actors, setActors] = useState([])

    const getActors = async (key, id) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
        const {data} = res
        setActors(data.cast)
    }

    useEffect(() => {
        getActors(ApiKey, movieId)
    }, [])

    console.log(actors)


    // const {profile_path, character, name} = actors

    return (
        <div id="actors">
            <div className="container">
                <h1 className="text-white text-4xl font-extrabold py-10">В главных ролях</h1>
                <div className="actors flex flex-nowrap overflow-x-auto">
                    {
                        actors.map(el => (
                            <div key={el.id} className="actors--img py-10">
                                <div className="actors--img__group">
                                    <Link to={`/actor-info/${el.id}`}>
                                        {!el.profile_path ? <img src={user} alt="img" width="210px"/>
                                            :
                                            <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                                 alt="img" className="actors--img__group"
                                            />
                                        }
                                    </Link>
                                    <IoPersonSharp className="text-center icons"/>
                                    <div className="actors--img__group--block"></div>
                                </div>
                                <h6 className="py-4 px-3 text-white text-2xl">{el.name}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailActors;