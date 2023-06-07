
import './App.css';
import Nav from './components/Nav';
import requests from './api/request';
import styled from 'styled-components';
import Banner from './components/Banner';
import Category from './components/Category';
import Row from './components/Row';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/searchPage'

const Layout=()=>{
    return (
      <div>
        <Nav/>
        <Oulet/>

      </div>
    )
}
//중첩라우팅
function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout/>}/>
      
      <Route index element= {<LoginPage/>}/>
      <Route path="main" {<MainPage/>}/>
      <Route path="movie" {<MainPage/>}/>
      </Route>
      </Routes>
     </div>
  );
}


export default App;

