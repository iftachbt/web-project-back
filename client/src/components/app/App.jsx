import "./App.module.css"
import React, { useState,useEffect } from "react";
import { fetchUser } from "../../actions/apiCalls/user";
import {
    Routes,
    Route,
   // useNavigate
  } from "react-router-dom";
//import Header from "../header/header";
//import HomePage from "../homePage/homePage";
import MainGame from "../gameSession/mainGame";
import LoginSignUp from "../userVaild/loginSignUp";


function App(){
  const [user, setUser] = useState(false)
const [state , setState]=useState(true)

 // const navigate = useNavigate();

  useEffect(() => {
    fetchUserHandler()  
    // eslint-disable-next-line 
  },[])
  useEffect(() => {
    console.log("appuser",user); 
  },[user])
  
  const fetchUserHandler = async () => {
    if(!user){
      const user_ = await fetchUser()
      if(!user_ || user_ === ""||user_ === "err") console.log("no user");
      else{
        setUser(user_)
      }
    }
  }
  
  
    
  return(
    <div>
       {/* <Header 
         user={user} 
        setUser={setUser} 
         setState ={setState} 
       /> */}
        <Routes>
            <Route exact path="/" element={
              <LoginSignUp 
              setUser ={setUser} 
              user ={user} 
              state ={state} 
              setState ={setState} 
              />}
             />
            <Route exact path="/game" element={
              <MainGame 
              setUser ={setUser} 
              user ={user} 
              state ={state} 
              setState ={setState} 
              />}
             />
        </Routes>
    </div>
    )
}

export default App

