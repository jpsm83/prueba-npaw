import React, { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { fetchAsyncITunes } from "../../redux/itunes/itunesSlice";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = () => {
  const [searchedITunes, setSearchedITunes] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let inputSearch = e.target.value;
    setSearchedITunes(inputSearch)
  }

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(fetchAsyncITunes(searchedITunes));
  // setSearchedITunes("")
}

  return (
    <Box component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}>
    <div className="input-search-container">
    <TextField id="outlined-search" label="Search ITunes" type="search" onChange={handleChange} value={searchedITunes} />
      <SearchIcon />
    </div>
    </Box>
  );
};

export default Search;
