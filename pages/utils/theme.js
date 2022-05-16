import { createTheme } from "@mui/material";
  
const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Arial',
    ].join(','),
    h1: {
      fontSize: '5rem',
      fontFamily: 'Raleway',
    },
    h2: {
      fontSize: '3.5rem',
      fontFamily: 'Open Sans',
      fontStyle: 'bold',
    },
    h3: {
      fontSize: '2.5rem',
      fontFamily: 'Roboto',
    },
  },
});
  
  
export default theme;