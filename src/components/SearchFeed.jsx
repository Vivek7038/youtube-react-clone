import { Typography } from "@mui/material";
import { Box  } from "@mui/system";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI.jsx";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} =useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setvideos(data.items);
    });
  }, [searchTerm]);
  
  
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ color: "#fff" }}
          mb={2}
        >
           Search Result for <span style={{ color: "#f31503" , ml:".2px"}}>{searchTerm}&nbsp;</span>videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;