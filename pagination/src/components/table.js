import React from 'react'

const Table = (props) => {
  return (
    <div><table class="table text-center">
    <thead>
      <tr>
        <th scope="p-3">id</th>
        <th scope="p-3">Name</th>
        <th scope="p-3">Phone</th>
        <th scope="p-3">Email</th>
        <th scope="p-3">Signup Date</th>
  
      </tr>
    </thead>
    <tbody>
    {props.user?.map(item=>(         
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.fullName}</td>
          <td>{item.fullMobileNumber}</td>
          <td>{item.email}</td>
          <td>{item.signupDate}</td>
        </tr>
   ) )}
    
    </tbody>
  </table></div>
  )
}

export default Table