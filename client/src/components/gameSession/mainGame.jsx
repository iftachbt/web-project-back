import React ,{ useEffect, useState }from "react";
import style from "./mainGame.module.css"
import ResponsiveDrawer from "./displayBar/drower";
import {useNavigate,useParams} from "react-router-dom";

function MainGame(props){
  let {setUser,user} = props
  const navigator = useNavigate()

  React.useEffect(()=>{
    console.log("user ",user );
    if(!user)navigator("/")
  },[])
  
  function refreshPage() {
    window.location.reload(false);
  }

  return(
    <div className={style.mainCon}>
      <ResponsiveDrawer 
      setUser ={setUser} 
      user ={user} />
    </div>
  )
}
export default MainGame