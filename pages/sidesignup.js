import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    
      <Grid container component="main" sx={{ height: '100vh'}}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
        sx={{
            background:"#171010",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

        <br/>
        <Link href="/" variant="body2" sx={{color:"#FFFFFF", marginLeft:"30px"}}>
            {"HOTEL"}
        </Link>

          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, background:"white", padding: "24px"}}>
            
            {/*SIGN IN FORM*/}

            <center>
                <Typography component="h1" variant="h5">
                    Sign up
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

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, background:"#2B2B2B", color:"#808080"}}
              >
                Sign UP
              </Button>

              {/*FOR OPTIONS*/}

              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="/sidesignin" variant="body2" sx={{color:"#2B2B2B"}}>
                    {"Already have an account? Sign In"}
                  </Link>
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
            backgroundImage: "url(https://i.gifer.com/embedded/download/1trC.gif)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
  );
}