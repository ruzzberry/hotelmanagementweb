import AdminDrawer from "./admindrawer";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";


export default function AdminEdit(){   
    const [value, setValue] = React.useState(new Date());
    
  const router = useRouter();

  const gotoAdmindash = () => {
    router.push("/admin/admindashboard");
  };

return(
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh'}}><AdminDrawer/>
    <TextField id="outlined-name"
    label="First Name" sx={{marginRight:"50px"}}/>
    <TextField id="outlined-name"
    label="Last Name" sx={{marginTop:"15px", marginRight:"50px", marginBottom:"10px"}}/>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          label="Check In Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{width: '80%'}} />}
        />
        <DatePicker
          disableFuture
          label="Check In Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{width: '80%'}} />}
        />
      </Stack>
    </LocalizationProvider>
    <Box
  m={1}
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
        <Button variant="contained" color="success">Edit</Button>
        <Button variant="contained" color="error"sx={{marginLeft:"10px", marginRight:"50px"}} onClick={gotoAdmindash}>Cancel</Button>
        </Box>
    </Grid>
);
}