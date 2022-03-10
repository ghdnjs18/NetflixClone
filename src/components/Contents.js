import React, { useState, useEffect } from "react";
import './Contents.css';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original";

function Contents({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
      async function fetchDate() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
      }

      fetchDate();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="posters">
                {movies.map((movie) => (
                    <img 
                    key={movie.id}
                    className='poster'
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )

}

export default Contents