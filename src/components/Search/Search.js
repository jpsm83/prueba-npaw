import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "@heroicons/react/outline";
import {
  getAllMovies,
  getAllSeries,
  setSearchMovies,
  setSearchSeries,
} from "../../redux/movies/movieSlice";
import "./Search.scss";

const Search = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const moviesData = useSelector(getAllMovies);
  const seriesData = useSelector(getAllSeries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchMovies(filteredMovies));
    dispatch(setSearchSeries(filteredSeries));
  }, [filteredMovies, filteredSeries]);

  const handleSearch = (e) => {
    let searchedMoviesAndSeries = e.target.value;
    let filterMovies = moviesData.filter((item) => {
      return item.Title.toLowerCase().includes(
        searchedMoviesAndSeries.toLowerCase()
      );
    });
    setFilteredMovies(filterMovies);

    let filterSeries = seriesData.filter((item) => {
      return item.Title.toLowerCase().includes(
        searchedMoviesAndSeries.toLowerCase()
      );
    });
    setFilteredSeries(filterSeries);
  };

  return (
    <div className="search-bar">
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search Movies & Series"
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default Search;
