import React,{useState} from 'react'


const DebouncingBasic = () => {

   
let counter=0;
function getData(args){
    console.log("fetching Data",args,+counter++)
}
function myDebounce(call,d){
    let timer;
    return function(args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(() => {
            call(args);
        }, d);
    }
}
    const [searchvalue, setsearchvalue] = useState('');
    const searching = myDebounce(getData,900) 
  return (
    <div>   
    
    <input placeholder="search" name="search" onChange={(e)=>{searching(e)}} />
    </div>
  )
}

export default DebouncingBasic