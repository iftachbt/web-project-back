import React, { useState } from "react";
import { signUp } from "../../../actions/apiCalls/user";
//import { useNavigate } from "react-router-dom";
import { Formik,Form } from 'formik';
import { Grid,IconButton,InputAdornment } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import TextField  from '../TextField.form';
import Button from "../submit.btn";
import style from "../loginSignUp.module.css";
import { validationSchema } from "./signup.validate";

function SignUp(props){

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  //const navigate = useNavigate();

  async function handleClick(values){
    const res = await signUp(values)
    if(res.errMsg)return alert(res.errMsg)
    if(res !== "err"){
        props.setUser(res);
        props.refreshPage()
    }
  }

  return(
        <div className={style.container}>
          <h1>register</h1>
          <Formik
            validationSchema={validationSchema}
            initialValues={{password:"",userName:"",email:""}}
            onSubmit={values => handleClick(values)}
          >            
            <Form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    name="userName"
                    label="username"
                  />
                </Grid>
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
        </div>
  )
}
export default SignUp