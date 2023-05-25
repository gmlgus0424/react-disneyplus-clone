import React, { useEffect, useState } from 'react';
import axios from '../api/axios' ;//공통으로 들어간 aixos 불러오기
import requests from '../api/request'; //목록들
import "./Banner.css";


const Banner = () => {

  const [movie, setMovie] = useState([]);
  useEffect(()=>{

  },[])

  const fetchData=async()=>{
    //현재 상영중인 영화 정보를 가져오기 (여러 영화)
   const response= await axios.get(requests.fetchNowPlaying)
    //여러 영화 중 영화 하나의 ID 가져오기(request.data.result중 하나 가져오는거 배열로 0~19까지 랜덤 id값)
    const movieId=
    requests.data.results[
      Math.floor(Math.random()* requests.data.results.length)
    ].id;

    //여러 영화중 영화 하나의 특정(상세한)정보 가져오기 
    const {data:movieDetail}=await axios.get(`movie/${movieId}`,{
      params:{append_to_response:"videos"}
    })
    setMovie(movieDetail);

  }

  //제한 글자수 넘어가면 ... 으로 나타내주는 함수
  const truncate= (str,n)=>{
    return str?.length >n? str.substring(0,n)+"...":str;
  }

  //이미지 배너 ui
  return (
    <header className='banner' style={{
      backgroundImage:`url("https://image.tmbd.org/p/original/${movie.backdrop_path}"`,
      backgroundPostion: "top center",
      backgroundSize:"cover",
    }}
   >
    <div className='banner-contents'>
      <h1 className= 'banner_title'>
        {movie.title|| movie.name|| movie.orignal_name}
      </h1>

      <div calssName='banner-buttons'>
        {movie?.video?.results[0]?.key&&
        <button 
        className='banner_button play'
        >
          Play
          </button >
          }

      </div>
      <p className='banner_description'>
       {truncate(movie.overview,100)}

      </p>
     
    </div>
    <div className='banner--fadeBottom'/>

   </header>
  )
}

export default Banner