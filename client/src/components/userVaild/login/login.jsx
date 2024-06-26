import React, { useState } from "react";
import { logIn } from "../../../actions/apiCalls/user";
import { useNavigate } from "react-router-dom";
import { Formik,Form } from 'formik';
import { Grid,IconButton,InputAdornment } from '@mui/material';
import TextField  from '../TextField.form';
import Button from "../submit.btn";
import {Visibility,VisibilityOff} from '@mui/icons-material';
import style from '../loginSignUp.module.css';
import { validationSchema } from "./login.validate";

function LogIn(props){

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  async function handleClick(values){
    const res = await logIn(values)
    if(res.errMsg)return alert(res.errMsg)
    if(res !== "err") {
      console.log("res",res);
      props.setUser(res);
      props.refreshPage()
      alert("successfully logIn")
      }
    else alert("couldn't logIn")
  }
  return(
        <div className={style.container}>
          <h1>Login</h1>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: ""
          }}
            onSubmit={values => handleClick(values)}
          >            
            <Form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    name="email"
                    label="email"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField 
                    name="password"
                    label="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button>submit</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
          <p>still not signUp?</p>
          <p>register <a onClick={() => props.setState(false)}>here</a></p>
        </div>
  )
}
export default LogIn