import { useState } from 'react';
import './App.css';
import Table from './components/table';
import { getUsers,getLength } from './components/users';
import Pagination from './components/Pagination';

console.log("getUsers",getUsers());


function App() {
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);

  let totalPage= Math.ceil(getLength()/limit)

  return (
    <div className="container">
    <Table user={getUsers(page,limit)}/>
    <Pagination/>
    </div>
  );
}

export default App;
