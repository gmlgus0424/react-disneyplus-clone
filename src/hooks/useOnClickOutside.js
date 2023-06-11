import { useEffect } from "react";




export default function useOnClickOutside(ref,handler){
useEffect(()=>{
  const listener=(event)=>{
    if(!ref.current || ref.current.contains(event.target)){
      return ;
    }
    handler();
  };

  document.addEventListener("mousedown", listener);
  document.addEventListener("touchstart", listener);

  return()=>{
    document.removeEventListener("mousedown", listener);
    document.removeEventListener("touchstart", listener);
  }
},[ref,handler])
}

//ref는 안인지 밖인지 확인
//handler는 밖의 창을 클릭하면 창을 닫아주는 역할

//클릭시 모달 창 안이면 그냥 return
