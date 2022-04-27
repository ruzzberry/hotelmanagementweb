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
      }}
    >
      {/* TITLE SIGN IN */}
      <Box>
        <Typography variant="h5" sx={{ fontSize: "35px" }}>
          Sign In
        </Typography>
      </Box>

      {/* FORM */}
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          marginTop: "12px",
        }}
      >
        <TextField label="Email Address" name="email" type="email" />
        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{ marginTop: "12px" }}
        />

        <Button variant="contained" sx={{ marginTop: "12px" }}>
          Sign In
        </Button>

        {/* OPTIONS */}
        <p sx={{ marginTop: "12px" }}>
          Not yet a member? <Link href="/register">Sign up</Link>
        </p>
        {/*<Typography onClick={gotoRegister} sx={style.linkStyle}>Create new account</Typography>*/}
        <Box></Box>
      </Paper>
    </Box>
  );
}
