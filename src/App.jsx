import React, { useEffect, useState } from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Companents/Login/Login';
import ProrectedRoute from './Companents/ProtectedRoute/ProrectedRoute';
import Adminleautes from './Leautes/AdminLeautes';
import Noadminleautes from './Leautes/NoadminLeautes';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import axios from 'axios'

function App() {
  const [movies,setMovies] = useState([{
    id:1,title:"helll",body:'name',
    id:2,title:"helll",body:'name'

  }])
useEffect(() =>{
    axios({
         url:"https://www.omdbapi.com/?apikey=bc55be08&s=movies&page=1",
         method:'GET'
     })
     .then(res => {
       
         setMovies(res.data)
     })
     .catch(err => {
         console.log(err.message)
     })
     
},[])



console.log(movies)
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Adminleautes />} >
           <Route index  path='/Home' element ={
          <ProrectedRoute>
                       <Home movies={movies} />
          </ProrectedRoute>
           } />
           <Route path='/Movies' element={
                  <Movies />
           } />
          
        </Route>
        <Route path='/auth' element={<Noadminleautes />}>
          <Route path='' element={<Navigate to='/auth/Login' replace={true} />}></Route>
          <Route path='Login' index element={<Login />} ></Route>
        </Route>
      </Routes>
      </BrowserRouter>

        
    
    </div>
  );
}

export default App;
