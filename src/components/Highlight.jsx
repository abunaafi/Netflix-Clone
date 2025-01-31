import React from "react";
import Navbar from "./Navbar";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
const Highlight = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=214728d1784ef60daa12adae1e6fc4b0";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="main">
        <Navbar />
        <div className="movie-poster">
          <img
            src="https://image.tmdb.org/t/p/original/4OgaftFNqtE1UvfDDb2Eov7A5Rz.jpg"
            alt=""
          />
          
          <div className="title"> 
           
          </div>
        </div>
        {/* <div className="buttons">
          <Stack direction='row' spacing={2}>
    <Button variant="contained" startIcon={<PlayArrowIcon color="secondary"/>}>Play</Button>
    
    <Button variant="outlined" >More Info</Button>
</Stack>
          </div> */}
      </div>
      {/* {movies.map((movie, index) => (
        <div>
          <img
            key={index}
            className="child"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="description">{movie.overview}</div>
          <p className="title">{movie.title}</p>
        </div>
      ))} */}
    </>
  );
};

export default Highlight;
