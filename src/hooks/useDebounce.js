// 입력을 하면 지연되는데 이것을 없애줌
import { useEffect,useState } from "react";

export const useDebounce=(value, delay)=>{
  const [useDebounce,setDebounceValue]= useState(value);

  useEffect(()=>{
    const handler= setTimeout(()=>{
      setDebounceValue(value)
    },delay);
    return ()=>{
      clearTimeout(handler)
    }
  },[value,delay])


  return setDebounceValue
}