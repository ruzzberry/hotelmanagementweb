import AdminDrawer from "./admindrawer";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  

export default function Admindashboard(){   
  
  const router = useRouter();

      const gotoAdminadd = () => {
        router.push("/admin/adminadd");
      };
      
      const gotoAdminEdit = () => {
        router.push("/admin/adminedit");
        
      };

return(
    
<Box component="main" sx={{marginLeft:"100px", marginTop: "100px", flexGrow: 1, p: 3, height: 450, width: '90%' }}>
<AdminDrawer/>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        <Box
  m={1}
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
        <Button variant="outlined" color="success" onClick={gotoAdminadd}>Add</Button>
        <Button variant="outlined" sx={{marginLeft:"10px"}} onClick={gotoAdminEdit}>Edit</Button>
        <Button variant="outlined" color="error" sx={{marginLeft:"10px"}}>Delete</Button>
        </Box>
        </Box>
    );

}