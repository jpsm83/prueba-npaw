import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./AddPagination.css";
import { useSelector } from "react-redux";
import { getAllAlbums } from "../../redux/itunes/itunesSlice";

const AddPagination = ({ setAlbums }) => {
  const pageSize = 6;

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const data = useSelector(getAllAlbums);

  useEffect(() => {
    setPagination({ ...pagination, count: data.length });
    if (data.resultCount > 0) {
      setAlbums({ ...data, results: data.results.slice(pagination.from, pagination.to) });
    }
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
