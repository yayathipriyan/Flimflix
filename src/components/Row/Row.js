import React, { useEffect, useState } from 'react'
import axios from "../../helpers/axios";
import "./Row.css";

const Row = ({title,fetchURL,isLarge = false}) => {
  const [movies,setMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";
  
  useEffect(()=>{
    const fetchData = async()=>{
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);

        return request;
    }

    fetchData();
  },[fetchURL])

  console.log(movies);

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {
                movies.map((movie)=>
                ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                  <img 
                    key={movie.id} 
                    className={`row_poster ${isLarge && "row_poster_Large"}`}
                    src={`${base_url}${
                      isLarge ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt=""
                  />
                ))
            }
        </div>
    </div>
  )
}


export default Row