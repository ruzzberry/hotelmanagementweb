import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <Box>
      <Typography variant="h2" sx={{ fontSize: "24px" }}>
        INDEX
      </Typography>
      <Box>
        <Link href="login">
          <button>Sign In</button>
        </Link>
      </Box>
    </Box>
  );
}
