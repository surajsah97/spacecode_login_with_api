import React, { useEffect, useState } from "react";
import CONSTANTS from "../../common/constant"
import {
  
  InputLabel,
  Typography
} from "@material-ui/core";
import CustomButton from "../../component/button/Button";
import Sendlogin from "../../redux/actions/action"
import CustomInput from "../../component/input/Input";
import CustomTypography from "../../component/typography/Typography";
import Password from "../../component/password/password";
import Chekbox from "../../component/checkbox/Checkbox";
import { useHistory, Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReactCardFlip from 'react-card-flip';
import CircularProgress from '@mui/material/CircularProgress';
import { useLoginPageStyles } from './styles';
import { Grid } from "@material-ui/core";
import Image from "../../component/image/Image";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const classes = useLoginPageStyles();
  
  const [email, setemail] = useState("")
  
const handleemail=(e)=>{
setemail(e.target.value)
}

const handleforget=()=>{
    setisForgatPass(!isForgatPass)
    
    
}

 

  const history = useHistory();
  const dispatch = useDispatch();
  const resp = useSelector((state) => state.Signin);
  // const { loading, error, userInfo } = resp;
  const { loading, error, userInfo} = resp;
  
  useEffect(() => {
    if(userInfo!==undefined){
      // console.log(userInfo);
      if(userInfo.status){
        history.push("/")
        toast.success("success")
      }
      else{
        toast.warn("username or passwor incorrect")
      }
    }

  },[userInfo])


  const [change, setchange] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [show_hidepass, setshow_hidepass] = useState(false);
  const [isForgatPass, setisForgatPass] = useState(false);
  // console.log(username);
  const handleChange = (e) => {
    setchange(e.target.checked);
  };

  const handlelogin = (e) => {
    e.preventDefault();

    const post = { username, password };
    console.log(post);
    dispatch(Sendlogin(post));
   
  };

  const handleusername = (e) => {
    setusername(e.target.value);
    console.log((e.target.value));
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };



  const handleforgotpass=(e)=>{
    const data = { username, email };
    // console.log(data);
    // dispatch(Sendforgotpass(data));
  }


  


const Submitbutton=(
  <Grid
      item
      className={classes.loginBtnContainer}
  >
    <CustomButton
                mt={0}
                onClick={handleforgotpass}
                children={"SUBMIT"}
                fullWidth
          
                variant={"contained"}
                color="primary"
                // Padding={"25px"}
                bgcolor={"#2A2247"}
              />
              </Grid>
)



const Loginbutton=(
  <Grid
      item
      className={classes.loginBtnContainer}
  >
    <CustomButton
                mt={20}
                onClick={handlelogin}
                children={loading ? <CircularProgress color="inherit" size={20} /> : "Login"}
                fullWidth
                variant={"contained"}
                color="primary"
                // Padding={"25px"}
                bgcolor={"#2A2247"}
              />
              </Grid>
)
const forgotpass=(
  ( <div><Grid className={classes.logoContainer} container direction="row" alignItems="center" justifyContent="center" >
<Image/></Grid>

{/* <Box  p={10} pb={6} pt={1}> */}
<Typography variant="h5" color="textSecondary" align="center" className={classes.typographyH6}>Forgot Your Password ?</Typography>
<Typography variant="subtitle2" color="textSecondary" align="center" className={classes.typographySubtitle}>Don't worry. Recovering the password is easy. Just tell us the email address you have registered with BloodSpace.</Typography>
        {/* </Box> */}
        <Grid container style={{marginBottom:"50px", marginTop:"10px"}} direction="row"  alignItems="center" className={classes.loginCardGrid} justifyContent="center">
<Grid item>


<InputLabel className={classes.inputLabel}>Username</InputLabel>
  <CustomInput
      name="userName"
      value={username}
      onChange={handleusername}
      size="md"
      focus={true}
  />
</Grid>

<Grid item className={classes.passwordInputBox}>
  <InputLabel className={classes.inputLabel}>email</InputLabel>
  <CustomInput
      name="email"
      value={email}
      onChange={handleemail}
      size="md"
      focus={true}
  />



{Submitbutton}
</Grid>
</Grid></div>)
)







const mainpage=( <div>
  
  <Grid className={classes.logoContainer} container direction="row" alignItems="center" justifyContent="center" >
<Image/>
</Grid>  

  <Grid container style={{marginBottom:"50px", marginTop:"50px"}} direction="row" alignItems="center" className={classes.loginCardGrid} justify="center">
            <Grid item>

<InputLabel className={classes.inputLabel}>Username</InputLabel>
  <CustomInput
      name="userName"
      value={username}
      onChange={handleusername}
      size="md"
      focus={true}
  />
</Grid>

<Grid item className={classes.passwordInputBox}>
  <InputLabel className={classes.inputLabel}>Password</InputLabel>
  <Password
      name="password"
      size="md"
      value={password}
      
      autoFocus
      onChange={handlepassword}
      
  />
</Grid>

<Grid item className={classes.secureLoginContainer} >
  <Grid container direction="row" alignItems="center" spacing={4}>
      <Grid item>
      <Chekbox onChange={handleChange} checked={change} label={"Secure login"} />
      
      </Grid>
      <Grid item>
      <CustomTypography
                  variant="subtitle2"
                  
                  className={classes.forgotPasswordText}
                  onClick={handleforget}
              > {"Forgot Password ?"}  </CustomTypography>
              
      </Grid>
      </Grid>
      
  
{Loginbutton}
</Grid>

</Grid>

</div>)


  return (
   
    <>
    <ReactCardFlip isFlipped={isForgatPass} flipDirection="vertical">
    <Grid container direction="row"  alignItems="center" justifyContent="center">

    
    <div className={classes.root}>
    
            {mainpage}
            
            </div>
      
    </Grid>
    <Grid container direction="row" alignItems="center" justifyContent="center">
    
    <div className={classes.root}>
      {forgotpass}
      </div>
    </Grid>
</ReactCardFlip>                    

<Typography className={classes.copyrightText} variant="body2"  align="center">
Copyright © 
                <Link color="inherit" style={{textDecoration:"none", color:"gray"}}  href="https://spacecode.com/">
                Spacecode Healthcare S.A.
                </Link>{' '}
                {new Date().getFullYear()} All rights reserved.
            </Typography>
            </>
            
  );
};
export default Login;



