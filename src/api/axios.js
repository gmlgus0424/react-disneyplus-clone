
//인스턴스 생성. 모듈 불러오기
import axios from 'axios';

//baseurl- 겹치는 url부분 params 부분은 api key 받은거 가져오고 언어는 한국어로 지정
const instance= axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key:"b2c6795f273351f359acb03f1b0fa224",
    language: "ko-KR"
  }
})

export default instance;