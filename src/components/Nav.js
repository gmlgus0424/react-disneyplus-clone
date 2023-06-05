import React, { useEffect,useState } from 'react'
import styled from 'styled-components'


const Nav = () => {
  const [show,setShow]=useState(false);
  useEffect(()=>{
      //로직
      //스크롤- 스크롤이 50보다 클때는 setShow가 실행 안클때는 실행 안됨
      window.addEventListener('scroll',()=>{
        if(window.scrollY>50){
          setShow(true);
        }else{
          setShow(false);
        }
      })
    return ()=>{
      // 사용하지 않을때의 코드 
      window.removeEventListener('scroll',()=>{});
    }
  },[
    //베열 없으면 컴포넌트 실행 딱 한번만 실행 / 만약 여기에 있으면 그게 실행됨 
  ])
  return (
    <NavWrapper show={show}>
      <Logo>
        <img alt="Disney Plus Logo" src="" onClick={()=>(window.location.href="/")}/>
      </Logo>
    </NavWrapper>
  )
}

export default Nav


// css(styled-component)
const NavWrapper=styled.nav`
position: fixed; //스크롤링해도 픽스
top:0;
left:0;
right:0;
height: 70px;
background-color:${props=>props.show ? "#090b13":"transparent"};
display : flex;
justify-content: space-between; 
align-items: center;
padding : 0 36px;
letter-spacing : 16px;
z-index: 3;
`;


const Logo=styled.a`
padding:0;
width: 80px;
margin-top : 4px;
max-height: 70px;
font-size: 0;
display: inline-block;

img{
  display:block;
  width: 100%;
}
`;