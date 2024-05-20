import React,{memo} from 'react'

const Child = ({fun,incrementCounterTwo}) => {



    console.log("Child Component rendered ");
  return (
    <div>Child</div>
  )
}

export default memo(Child);