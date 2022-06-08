import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { useRouter } from "next/router";
import {IconButton, AppBar, Toolbar} from "@mui/material";
import { Title } from "@mui/icons-material";
import Head from "next/head";


export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const router = useRouter();

      const gotoLandpage = () => {
        router.push("/");
      };

      const gotoSignup = () => {
        router.push("/sidesignup");
      };

      const gotoForgetpass = () => {
        router.push("/sideforgetpass");
      };

      const gotoUserdash = () => {
        router.push("/userdashboard");
      };

  return (

    
      <Grid container component="main" sx={{ height: '100vh'}}>
        <Head>
                <title>Sign In</title>
        </Head>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
        sx={{
            backgroundImage: "url(https://wallpaperaccess.com/full/1687758.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

        <br/>
        <AppBar sx={{background:"#2B2B2B"}}>
          <Toolbar>
            <IconButton onClick={gotoLandpage}>
                    <img src="/assets/svg/omegaicon.ico" alt="Hotel Icon" 
                        width={45} 
                        height={45}/>
                    </IconButton>

                    <Typography onClick={gotoLandpage}
                    sx={{fontStyle:"normal", 
                    fontWeight:"normal",
                    fontSize:"24px",
                    lineHeight:"24px",
                    marginLeft:"10px",
                    cursor:"pointer",}}>Hotel Omega</Typography>
              </Toolbar>
            </AppBar>
          <Box
            sx={{
              my: 14,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, background:"white", padding: "24px", marginTop:"100px"}}>
            
            {/*SIGN IN FORM*/}

            <center>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </center>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="dark"
                style={{ width:"50vh",color:"#FFFFFF"}} onClick={gotoUserdash}
              >
                Sign In
              </Button>

              {/*FOR OPTIONS*/}

              <Grid container>
                <Grid item xs>
                  <Link onClick={gotoForgetpass} variant="body2" sx={{color:"#2B2B2B", cursor:"pointer"}} disable>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item >
                  <Typography 
                  variant="body2" 
                  onClick={gotoSignup}
                  sx={{
                    cursor:"pointer",
                    textDecoration: 'underline',
                  }}>Don't have an account? Sign Up</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/*FOR THE BACKGROUND IMAGE*/}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(http://i.imgur.com/GZIQLNm.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
  );
}