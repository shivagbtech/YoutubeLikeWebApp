import { Box,  Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromApi";

const SearchFeed = () => {
 

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p={2} minHeight={'95vh'}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results for: <span style={{ color: "#F31503" }}>videos</span>
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
