import React, { useCallback,useEffect, useState } from 'react'
import axios from '../api/axios';
import "./Row.css"
import MovieModal from './MovieModal';


//영화정보 가져오기,useEffect 사용
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelection] = useState({})


    const fetchMoiveData= useCallback(async()=>{
      const response  = await axios.get(fetchUrl);
      console.log('respons',response);
      setMovies(response.data.results);
    }, [fetchUrl])

    useEffect(() => {
      fetchMovieData();
    }, [fetchMovieData])
  
    //모달오픈
    const handleClick = (movie) => {
      setModalOpen(true);
      setMovieSelection(movie);
    }
  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow_left">
          <span className="arrow" onClick={()=>{
            document.getElementById(id).scrollLeft -= window.innerWidth-80
          }}>
            {"<"}
          </span>
        </div>
        <div id={id} className="row_posters">
          {moives.map(movies=>(
            <img key={movies.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movies.name}
            onClick={()=>handleClick(moives)}
            />
          ))}
        </div>
        //옆으로 넘기기 scrollLeft : 콘텐츠 왼쪽 가장자리 스크롤 되는 픽셀 수 가져오거나 설정
        <div className="slider_arrow_right">
          <span className="arrow" onClick={()=>{
            document.getElementById(id).scrollLeft += window.innerWidth-80
          }}>
            {">"}
          </span>
        </div>
      </div>
      
     {modalOpen &&(
      <MovieModal
      {...movieSelected}
        setModalOpen={setModalOpen}/>
     ) }
    

   </div>
  )
}

export default Row