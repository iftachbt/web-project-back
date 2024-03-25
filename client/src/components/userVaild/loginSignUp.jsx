import React from "react";
import style from './loginSignUp.module.css';
import LogIn from './login/login';
import SignUp from './signup/signup';
import { useNavigate } from "react-router-dom";

function LoginSignUp(props){
const {user ,setUser,state , setState}=props
  const navigate = useNavigate();

React.useEffect(()=>{
  navigate("/game")
  console.log("game");
},[user])

function refreshPage() {
  window.location.reload(false);
}
  return(
    <div className={style.main_container}>
      {state 
      ?<LogIn 
      setUser = {setUser} 
      setState = {setState} 
      user = {user}
      refreshPage = {refreshPage}/>
      :<SignUp 
      setUser = {setUser} 
      setState = {setState} 
      refreshPage = {refreshPage}
      user = {user}/>}
    </div>
  )
}
export default LoginSignUp