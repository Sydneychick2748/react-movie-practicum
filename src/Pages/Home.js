import React from "react";
import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import NavBar from "../Components/NavBar";
import "./Home.css";


const Home = (props) => {
  console.log("props from app", props);
  return (
    <div>
      <NavBar />

      <Header headerText="Your Movies" />
      <p className="search">Search</p>
      <div className="button-div">
        <button className="add-btn">Search your movies</button>
        <button className="search-button">Search</button>
      </div>

      <div className="map-movie-cards" style={{ display: "grid" }}>
        {props.movies.map((movie, key) => {
          return <MovieCard movie={movie} key={key} />;
        })}
    
      </div>
    </div>
  );
};
export default Home;
