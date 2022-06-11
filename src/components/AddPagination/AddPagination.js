import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./AddPagination.css";

const pageSize = 20;

const AddPagination = () => {
  return (
    <Stack spacing={2} className="pagination-container">
      <Pagination count={10} shape="rounded" />
    </Stack>
  )
}

export default AddPagination