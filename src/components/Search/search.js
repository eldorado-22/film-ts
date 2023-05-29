import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {ApiKey} from "../../ApiKey/ApiKey";
// import Popular from "../../pages/Popular/popular";
// import Hero from "../Hero/hero";

const Search = () => {
    const [search, setSearch] = useState([])
    const {value} = useParams()
    const getSearch = async () => {
        try {
            const res = await  axios (`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${value}`)
            const {data} = await res
            await setSearch(data.results)
        }catch (e) {
            console.log(e, 'error')
        }
    }

    // console.log(search)

    useEffect(() => {
        getSearch()
    },[])

    return (
        <div>
            <div className="container">
                <div className="search">
                    {
                        // search.map(el => (
                            // <Hero el={el}/>
                        // ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;