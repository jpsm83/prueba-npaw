import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./AddPagination.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "../../redux/itunes/itunesSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddPagination = ({ setAlbums }) => {
  const [pageSize, setPageSize] = useState(4);

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const data = useSelector(getAllAlbums);

  const uniqueAlbums = data.reduce((acc, toCompare) => {
    const comparing = acc.find(
      (album) => album.collectionName === toCompare.collectionName
    );
    const value = {
      collectionName: toCompare.collectionName,
      artworkUrl100: toCompare.artworkUrl100,
      artistName: toCompare.artistName,
    };
    if (!comparing) {
      acc.push({ ...value });
    }
    return acc.slice(0,20);
  }, []);

  useEffect(() => {
    setPagination({ ...pagination, count: uniqueAlbums.length, to: pageSize });
    setAlbums(uniqueAlbums.slice(pagination.from, pagination.to));
  }, [pagination.from, pagination.to, data, pageSize]);
  
const handleSelectChange = (e) => {
  setPageSize(e.target.value)
}

  const handlePageChange = (e, page) => {
    e.preventDefault();
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Stack spacing={2} className="pagination-container">
    {uniqueAlbums.length > 0 &&
      <Pagination className="pagination"
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
        shape="rounded"
        variant="outlined"
        color="secondary"
        defaultPage={1}
              />
    }
    {uniqueAlbums.length > 0 &&
    <div className="show-selector">
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Show</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageSize}
          label="Show"
          onChange={handleSelectChange}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl> </div>}  </Stack>
  );
};

export default AddPagination;
