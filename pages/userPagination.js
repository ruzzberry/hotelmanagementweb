import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Userpagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={1} shape="rounded" variant="outlined" color="secondary" />
    </Stack>
  );
}
