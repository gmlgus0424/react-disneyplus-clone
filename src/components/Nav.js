import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const Nav = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  


  useEffect(()=>{
      window.addEventListener('scroll', handleScroll)

      return ()=>{
      // 사용하지 않을때의 코드 
      window.removeEventListener('scroll', handleScroll);
    }
  },[
    //베열 없으면 컴포넌트 실행 딱 한번만 실행 / 만약 여기에 있으면 그게 실행됨 
  ])

 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
//페이지 이동  ex http://localhost:3000/search?q=spider
  const HandleChange=(e)=>{
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);

  }


  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>

      {pathname === "/" ?
        (<Login onClick={handleAuth}>Login</Login>) :
        <>
          <Input
            value={searchValue}
            onChange={handleChange}
            className='nav__input'
            type="text"
            placeholder='검색해주세요.'
          />

          <SignOut>
            <UserImg src={userData.photoURL} alt={userData.displayName} />
            <DropDown>
              <span onClick={handleSignOut}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      }
    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`
  background-color: rgba(0,0,0,0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`;

const Input=styled.input`
  position: fixed;
  left:50%;
  transform : translate(-50%,0);
  background-color : rgba(0,0,0,0.582);
  border-radius : 5px;
  color: white;
  padding : 5px;
  border : none;
`;

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