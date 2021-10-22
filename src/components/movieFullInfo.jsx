import React,{useEffect, useState} from 'react'
import API from '../api/api'


const  movieFullInfo = (movieid) => {
    useEffect(() => {
        API.getSpecificMovie(movieid).then((specificMovie) => setSpecificMovieInfo(specificMovie))
    }, [])

    const [specificMovieInfo, setSpecificMovieInfo] = useState([])

    return (
        <div>
            {movieid}
        </div>
    )
}

export default movieFullInfo
