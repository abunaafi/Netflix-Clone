import { useState, useEffect } from "react";
import "./App.css";
import { Footer } from './components/Footer'
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import Slider2 from "./components/Sliders/Slider2";
import Slider from "./components/Sliders/Slider";
import Slider3 from "./components/Sliders/Slider3";
import Slider4 from "./components/Sliders/Slider4";
import "./slider.css"
import "./footer.css"
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
<Slider2/>
<Slider/>
<Slider3/>
<Slider4/>
<Footer/>

    </>
  );
}

export default App;
