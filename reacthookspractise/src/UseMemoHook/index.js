import React, {useState,useMemo} from 'react'
const UseMemoHook = () => {

    const [incrementCounterOne, setincrementCounterOne] = useState(0);
    const [incrementCounterTwo, setincrementCounterTwo] = useState(0);

const ChangeincrementCounterOne = () => 
    {
      console.warn("....ChangeincrementCounterOne");
        setincrementCounterOne(incrementCounterOne+1);
    }
    const ChangeincrementCounterTwo = () => 
      {
        console.warn("....ChangeincrementCounterTwo");
          setincrementCounterTwo(incrementCounterTwo+1);
      }


      const setEven = useMemo(() =>   {
        console.warn("....setEven");
        for (let index = 0; index < 2000000000; index++) {
         let h=index+1;
        }
        return incrementCounterOne%2===0
      }, [incrementCounterOne]);
     
      return (
    <div>
    Use Memo
    <button onClick={ChangeincrementCounterOne} >Counter 1 - {incrementCounterOne}</button> 
    <button onClick={ChangeincrementCounterTwo} >Counter 2 -{incrementCounterTwo}</button> 

    <span>{setEven?'even':'odd'}</span>
    </div>
  )
}

export default UseMemoHook