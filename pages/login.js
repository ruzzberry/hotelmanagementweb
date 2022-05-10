import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {

  const router = useRouter();

  const gotoRegister = () => {
    router.push("/register");
  };

  const style = {
    linkStyle: {
      cursor: "pointer",
      color: "#417D7A"
    },
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#1A3C40",
      }}
    >
      {/* FORM */}
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          marginTop: "12px",
          background: "",
        }}
      >
        <center>
          <Typography variant="h5" 
          sx={{ fontSize: "35px", 
          marginBottom:"12px",
          color:"#1A3C40"}}>
            Sign In
          </Typography>
        </center>

        <TextField label="Email Address" name="email" type="email" />
        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{ marginTop: "12px"}}
        />

        <Button variant="contained" 
        sx={{ marginTop: "12px", 
        background: "#417D7A"}}>
          Sign In
        </Button>

        {/* OPTIONS */}
        <Box sx={{display:"flex", justifyContent:"right", marginTop: "12px"}}>
        <Typography variant="subtitle2" onClick={gotoRegister} sx={style.linkStyle}>Create new account</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
