import React ,{ useEffect, useState }from "react";
import style from "./mainGame.module.css"
import ResponsiveDrawer from "./displayBar/drower";
import {useNavigate,useParams} from "react-router-dom";

function MainGame(props){
  const URL = process.env.REACT_APP_SERVER;
  const {user} = props
  const {sessionCode} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
 
  },[])

  function refreshPage() {
    window.location.reload(false);
  }

  return(
    <div className={style.mainCon}>
      <ResponsiveDrawer />
    </div>
  )
}
export default MainGame