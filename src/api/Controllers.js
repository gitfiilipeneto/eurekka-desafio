import React, { useState, useEffect } from 'react'
import API from './api'

const Controllers = () =>  {
const [tmdb, setTmdb] = useState([])

useEffect(() => {
    API.getTMDB()
    .then(tmdb =>setTmdb(tmdb))

}, [])
console.log(tmdb)
let moviesTittle = tmdb.title //apply destructurng method for each .item on tmdb
let moviesDescription = tmdb.overview
let moviesRating = tmdb.vote_average
let moviesImgDefaultUrl = "https://image.tmdb.org/t/p/original/"
let moviesFrontCover = moviesImgDefaultUrl+tmdb.poster_path
let moviesBackCover = moviesImgDefaultUrl+tmdb.backdrop_path

return(
    <>
        {moviesTittle}
        {moviesDescription}
        <p>
        tmdb Average Rating {moviesRating}
        </p>
        <img src={moviesFrontCover} alt="movie cover"></img>
        <img src={moviesBackCover} alt="movie cover"></img>
         
    </>
    //map the response to dinamically generate the movies infos
    //uses material UI to style the cards with movies infos
)

}

//use this to default application controller

export default Controllers