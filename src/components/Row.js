import React, { useEffect, useState } from 'react'


//영화정보 가져오기,useEffect 사용
const Row = ({title, id, fetchUrl}) => {

  const [movie,setMoives]= useState([]);



    const fetchMoiveData= useCallback(async()=>{
      const response  = await axios.get(fetchUrl);
      console.log('respons',response);
      setMoives(request.data.results);
    }, [fetchUrl])

    useEffect(()=>{
      fetchMovieData();
      },[fetchUrl]);
  
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
          {moives.map(movie=>(
            <img key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
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
    </div>
  )
}

export default Row