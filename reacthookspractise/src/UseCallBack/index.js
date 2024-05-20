import React, {useState,useMemo, useCallback} from 'react'
import Child from './Child'
const UseCallBack = () => {

    const [incrementCounterOne, setincrementCounterOne] = useState(0);
    const [incrementCounterTwo, setincrementCounterTwo] = useState(0);

    const ChangeincrementCounterOne = () => 
    {
      console.warn("....ChangeincrementCounterOne");
        setincrementCounterOne(incrementCounterOne+1);
    }
         // this can render child component
    // const myfun =()=>  {console.log('.......myfun');  }
     
     // use call back prevents to render child component

     const myfun =  useCallback( () => {
        console.log('....myfun');
     },[incrementCounterTwo]);

      return (
    <div>
    Use call back
    <Child fun={myfun} incrementCounterTwo={incrementCounterTwo}/>
    <button onClick={ChangeincrementCounterOne} >Counter 1 - {incrementCounterOne}</button> 
 
    </div>
  )
}

export default UseCallBack;