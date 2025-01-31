import { useState, useEffect } from "react";
import "./App.css";
import { Footer } from './components/Footer'
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import Slider from "./components/Slider";
import "./slider.css"
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
<Highlight/>
<Slider/>
{/* <Footer/> */}

    </>
  );
}

export default App;
