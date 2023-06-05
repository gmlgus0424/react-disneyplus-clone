import React, { useEffect, useState } from 'react';
import axios from '../api/axios' ;//공통으로 들어간 aixos 불러오기
import requests from '../api/request'; //목록들
import "./Banner.css";
import styled from 'styled-components';


const Banner = () => {

  const [movie, setMovie] = useState([]);
  const [isClicked,setIsClicked]=useState(false);

  useEffect(()=>{
    fetchData();

  },[])

  const fetchData=async()=>{
    //현재 상영중인 영화 정보를 가져오기 (여러 영화)
    const response = await axios.get(requests.fetchNowPlaying); //eslint-disable-line no-unused-vars
    //여러 영화 중 영화 하나의 ID 가져오기(request.data.result중 하나 가져오는거 배열로 0~19까지 랜덤 id값)
    const movieId=
    requests.data.results[
      Math.floor(Math.random()* requests.data.results.length)
    ].id

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



  //비디오 클릭했을때 비디오 보여짐
  if(isClicked){
    return(
      <>
   <Container>
    <HomeContainer>
      <Iframe
       width="560" 
       height="315"
      src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
     frameborder="0"
     allow="autoplay:fullscreen"
      > 

      </Iframe>
    </HomeContainer>
   </Container>
   <button onClick={()=>setIsClicked(false)}>X</button>
   </>
    )
  }else{

  
  //이미지 배너 
  return (
    <header className='banner' 
    style={{
      backgroundImage:`url("https://image.tmbd.org/p/original/${movie.backdrop_path}")`,
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
       onClick={()=>setIsClicked(true)}
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
}

export default Banner


const Container = styled.div`
display: flex;
justify-content: center;
align-items : center;
flex-direction : column;
width: 100%;
height: 100vh;
`;

const HomeContainer= styled.div`
width:100%;
height: 100%;
`;

//iframe
const Iframe = styled.iframe`
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.65;
border: none;

&::after{
  content:"";
  position : absolute;
  top : 0;
  left : 0;
  width: 100%;
  height: 100%;
}
`;