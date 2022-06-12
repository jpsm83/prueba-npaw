import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./AddPagination.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "../../redux/itunes/itunesSlice";

const AddPagination = ({ setAlbums }) => {
  const pageSize = 20;

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
      uniqueKey: Math.floor(Math.random() * toCompare.trackId) + Math.floor(Math.random() * toCompare.trackTimeMillis),
      collectionName: toCompare.collectionName,
      artworkUrl100: toCompare.artworkUrl100,
      artistName: toCompare.artistName,
    };
    if (!comparing) {
      acc.push({ ...value });
    }
    return acc;
  }, []);

  useEffect(() => {
    setPagination({ ...pagination, count: uniqueAlbums.length });
    setAlbums(uniqueAlbums.slice(pagination.from, pagination.to));
  }, [pagination.from, pagination.to, data]);

  const handlePageChange = (e, page) => {
    e.preventDefault();
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Stack spacing={2} className="pagination-container">
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
        shape="rounded"
      />
    </Stack>
  );
};

export default AddPagination;
