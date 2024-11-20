import React from "react";
import "../MovieCard/MovieCard.css";
import { Link, useParams } from "react-router-dom";

function MovieCard  (movie)  {
  const { id } = useParams();

  return (
    <>
      <Link className="home" to="/">Home</Link>
      <div className="container">
        Movie Card {id}
        <h1>hello</h1>
      </div>
      <div className="info">
        <h2 className="title">{movie.title}</h2>
        <p className="rating"> {movie.vote_average}</p>
      </div>
      
    </>
  );
};

export default MovieCard;
