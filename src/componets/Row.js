import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';
import MovieModal from './movieModal/MovieModal';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ isLargeRow, title, fetchUrl, id }) {

    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
    }, []);


    const fetchMovieData = async function () {
        const request = await axios.get(fetchUrl);
        console.log('request', request);
        const movieResults = request.data.results;
        console.log('movieResults', movieResults);
        setMovies(movieResults);
    }

    const handleClick = function(movie){
        setModalOpen(true)
        setMovieSelected(movie);
    }

    return (
        <section className='row'>
            <h2>{title}</h2>
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]} 
            spaceBetween={50}
            slidesPerView={3}
            navigation 
            pagination={{clickable:true}} 
            scrollbar={(swiper) => console.log(swiper)} 
            onSlideChange={()=> console.log("slide change")} 
            >

<div className='row__posters' id={id}>
                    {movies.map((movie) => {
                        return (
                            <SwiperSlide>
                                <img
                                    key={movies.id}
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    alt={movie.name}  
                                    onClick={()=>{handleClick(movie);}}/>

                            </SwiperSlide>
                        )
                    })}
                </div>

            </Swiper>

            
            {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>}
        </section>
    )
}
