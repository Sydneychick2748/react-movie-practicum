import React, { useState, useEffect } from "react";
import Home from "../src/Pages/Home";
import Footer from "./Components/Footer";
import "./App.css";
import ProfilePicChange from "./Components/ProfilePicChanger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../src/Pages/Profile";

function App() {
  const movieTitles = [
    "Free Willy",
    "Frozen",
    "Titanic",
    "Moonlight",
    "Up",
    "Pulp Fiction",
    "The Negotiator",
  ];

  const [movies, setMovies] = useState([]);
  const getMovieObj = async (title) => {
    const url = `http://www.omdbapi.com/?i=tt3896198&t=${title}&apikey=ba23093a`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("responseJson", data);
    return data;
  };

  const getMovies = async (titlesArr) => {
    const storeReturn = await Promise.all(
      titlesArr.map((title) => {
        let obj = getMovieObj(title);
        // console.log(obj, "obj");
        return obj;
      })
    );

    setMovies(storeReturn);
    return storeReturn;
  };
  // console.log("movies", movies);
  useEffect(() => {
    getMovies(movieTitles);
  } );

  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ProfilePicChange" element={<ProfilePicChange />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
