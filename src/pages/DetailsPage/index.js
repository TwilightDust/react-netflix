import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsPage() {

    const {movieId} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(
            `/movie/${movieId}`
        );

        console.log("request",request)
        setMovie(request.data);
      }

      fetchData();
    
    //   return () => {
    //     second
    //   }
    }, [movieId]);
    

  return !movie ?(
    <div>...loading</div>
  ) : (
    <section>
        <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
        alt='poster'>
        </img>
    </section>
  );
}
