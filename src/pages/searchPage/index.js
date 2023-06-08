import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import "./SearchPage.css";


const SearchPage = () => {
  const navigate = useNavigate();
  const {searchResult, setSearchResult}=useState([]);



//데이터조회
  const useQury=()=>{
    return new URLSearchParams(useLocation().search);
  }

  let query= useQury();
  const searchTeram=query.get("q");



    useEffect(() => {
      if(SearchTerm) {
        fetchSearchMovie(SearchTerm)
      }
    }, [SearchTerm])
  
  const fetchSearchMoive=async(searchTeram)=>{
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
    }catch(error){
      console.log(error);
    }
  }



  if(searchResults.length > 0) {
    return (
      <section className='search-container'>
          {searchResults.map((movie) => {
            if(movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className='movie' key={movie.id}>
                  <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)} >
                    <img src={movieImageUrl} alt="movie" className='movie__poster' />
                  </div>
                </div>
              )
            } 
          })}
      </section>
    )
  } else {
    return (
        <section className='no-results'>
          <div className='no-results__text'>
            <p>
              찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
    )
  }
}

export default SearchPage

