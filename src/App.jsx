import { useState, useEffect } from "react";
import "./App.css";
// import { Footer } from './components/Footer'
import Navbar from "./components/Navbar";
function App() {
  // const API_URL =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=214728d1784ef60daa12adae1e6fc4b0";
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => setMovies(data.results));
  // }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
