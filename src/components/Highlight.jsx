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
      <div className="main">
        <Navbar />

        <div className="movie-poster">
          <img
            src="https://image.tmdb.org/t/p/original/4OgaftFNqtE1UvfDDb2Eov7A5Rz.jpg"
            alt=""
          />
        <div className="title">
          MOANA II
        </div>

          {/* <div className="title">
            Moana II
          </div>
          <p>after receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced</p> */}
        </div>
      </div>
    </>
  );
};

export default Highlight;
