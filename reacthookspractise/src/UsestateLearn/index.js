import React,{useState} from 'react'

const UsestateLearn = () => {

    const [student, setStudent] = useState({name:'',
    age:'',
    phone:''});

    


const  changState=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
}

  
  return (
    <div>
    <input placeholder='name' name='name' value={student.name} onChange={changState}/><br/>
    <input placeholder='age' name='age' value={student.age} onChange={changState}/><br/>
    <input placeholder='phone' name='phone' value={student.phone} onChange={changState}/><br/>    <div id='show'></div>
    <div><li>{student.name}</li><li>{student.age}</li><li>{student.phone}</li></div>
    </div>
  )
}

export default UsestateLearn