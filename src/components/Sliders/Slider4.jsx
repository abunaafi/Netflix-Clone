import React from "react";
import { useState, useEffect, useRef } from "react";
const Slider4 = () => {
  const trendingMovies =
    "https://api.themoviedb.org/3/trending/all/day?api_key=214728d1784ef60daa12adae1e6fc4b0&language=en-US";

  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    fetch(trendingMovies)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  const slideLeft = () => {
    if (!sliderRef.current || isTransitioning.current) return;
    isTransitioning.current = true;

    sliderRef.current.scrollLeft -= 600;
    setTimeout(() => (isTransitioning.current = false), 500);
  };
  const slideRight = () => {
    if (!sliderRef.current || isTransitioning.current) return;
    isTransitioning.current = true;
    sliderRef.current.scrollLeft += 600;

    setTimeout(() => {
      if (
        sliderRef.current.scrollLeft >=
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      ) {
        sliderRef.current.style.scrollBehavior = "auto";
        sliderRef.current.scrollLeft = 0;
        sliderRef.current.style.scrollBehavior = "smooth";
      }
      isTransitioning.current = false;
    }, 500);
  };
  return <>
     <div className="slider-main">
        <div className="slider-container">
          <button className="scroll-button left" onClick={slideLeft}></button>
            <h1 className="header">Blockbuster Movies</h1>
          <div className="slider" ref={sliderRef}>
            {movies.map((movie, id) => (
              <img
              key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="movie"
              />
            ))}
          </div>
          <button className="scroll-button right" onClick={slideRight}></button>
        </div>
      </div>
  </>
};

export default Slider4;
