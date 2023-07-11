import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './searchPage.css'
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {

const [searchResults, setSearchResults] = useState([]);
const navigate = useNavigate();

const useQuery = function(){
    return new URLSearchParams(useLocation().search);
}

let query = useQuery();

const searchTerm = query.get("q");
const debounceSearchTerm = useDebounce(query.get("q"),500);

const fetchSearchMovie = async function(searchTerm){
    try {
        const request = await axios.get(
            `/search/multi?query=${searchTerm}`
        );
        console.log(request)
        setSearchResults(request.data.results);

    } catch (error) {
        console.log('error...',error)
    }
  }

const renderSearchResult = () => {
    return searchResults.length > 0 ? (
        <section className="search-container">
            {
                searchResults.map((movie)=>{
                    if(movie.backdrop_path !== null && movie.media_type !== "person"){
                        const movieImageUrl = "https://image.tmdb.org/t/p/w500"+movie.backdrop_path;
                        return (
                            <div className='movie' 
                            key={movie.id}>
                                <div className='movie__column-poster' 
                                onClick={()=> navigate(`/${movie.id}`)}>
                                    <img 
                                    src={movieImageUrl} 
                                    alt='movie' 
                                    className='movie__poster'></img>
                                </div>
                            </div>
                        );
                    }
                })
            }
        </section>
    ) : (
        <section className='no-results'>
            <div className='no-results__text'>
                <p>"{searchTerm}"에 해당되는 영화가 없습니다.</p>
            </div>
        </section>
    );
}

useEffect(() => {
    if(searchTerm){
        fetchSearchMovie(searchTerm);
    }
  
  }, [debounceSearchTerm]);
  

  return renderSearchResult();
}
