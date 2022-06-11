import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchIcon } from "@heroicons/react/outline";
import { fetchAsyncITunes } from "../../redux/itunes/itunesSlice";

const Search = () => {
  const [searchedITunes, setSearchedITunes] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let inputSearch = e.target.value;
    setSearchedITunes(inputSearch)
  }

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(fetchAsyncITunes(searchedITunes))
}

  return (
    <div className="search-bar">
    <form onSubmit={handleSubmit}>
    <input
        onChange={handleChange}
        type="text"
        placeholder="ITunes"
      />
      <SearchIcon className="search-icon" />
    </form>
    </div>
  );
};

export default Search;
