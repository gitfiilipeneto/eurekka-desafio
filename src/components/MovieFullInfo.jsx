import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import API from '../api/api'


const  MovieFullInfo = ({movieId}) => {
    useEffect(() => {
        if(movieId === undefined){
            console.log("movie id is undefined")
        }else{
            API.getSpecificMovie(movieId).then((specificMovieInfos) => setSpecificMovieInfo(specificMovieInfos))
        }
    }, [])
    const [specificMovieInfos, setSpecificMovieInfo] = useState({})

    console.log(specificMovieInfos)

    return (
        <div>
            insert {specificMovieInfos.title} infos here
        </div>
    )
}

export default MovieFullInfo
