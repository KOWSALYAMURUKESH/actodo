import Card from "./componets/card";
import Header from "./componets/header";
import ToDo from "./componets/ToDoContainer";


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Landing from "./componets/pages/landing";
import Signup from "./componets/pages/signup";
import Login from "./componets/pages/login";
import { useState } from 'react';


function App()
{
const [users,setusers] = useState(
  [
    {
      username:"",
      password:""
    }
  ]
)



  return(
    <div>
    <BrowserRouter>
      


    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>

  )




}







export default App