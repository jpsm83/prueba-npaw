import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./AddPagination.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "../../redux/itunes/itunesSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
    return acc.slice(0, 20);
  }, []);

  useEffect(() => {
    setPagination({ ...pagination, count: uniqueAlbums.length, to: pageSize });
    setAlbums(uniqueAlbums.slice(pagination.from, pagination.to));
  }, [pagination.from, pagination.to, data, pageSize]);

  const handleSelectChange = (e) => {
    setPageSize(e.target.value);
  };

  const handlePageChange = (e, page) => {
    e.preventDefault();
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Stack spacing={2} className="pagination-container">
      {uniqueAlbums.length > 0 && (
        <Pagination
          className="pagination"
          count={Math.ceil(pagination.count / pageSize)}
          onChange={handlePageChange}
          shape="rounded"
          variant="outlined"
          color="secondary"
          defaultPage={1}
        />
      )}
      {uniqueAlbums.length > 0 && (
        <div className="show-selector">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={pageSize}
              onChange={handleSelectChange}
            >
              <div className="select-radio">
                <FormLabel
                  id="demo-controlled-radio-buttons-group"
                  className="radio-label"
                >
                  Show
                </FormLabel>
                <FormControlLabel value={4} control={<Radio />} label={4} />
                <FormControlLabel value={10} control={<Radio />} label={10} />
                <FormControlLabel value={20} control={<Radio />} label={20} />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      )}
    </Stack>
  );
};

export default AddPagination;
