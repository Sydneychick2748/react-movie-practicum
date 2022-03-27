import React, { useEffect, useState } from "react";

const MovieCard = (props) => {
  //   console.log(props, "props in moviecard");
  return (
    <div className="movie-cards">
      <div className="poster-title-plot">
        <img className="poster" src={props.movie.Poster} alt="poster" />
        <p className="title"> {props.movie.Title}</p>
        <p className="plot">{props.movie.Plot}</p>
        <p className="released">{props.movie.Released}</p>
      </div>
    </div>
  );
};
export default MovieCard;
