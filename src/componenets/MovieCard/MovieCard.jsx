import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../MovieCard/MovieCard.css'

function MovieCard() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "1f990dab8f4e9c2064379663134a81ea",
            },
          }
        );
        setMovie(response.data); 
        setLoading(false); // Turn off loading
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false); 
      }
    };

    fetchMovie();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Error fetching movie details. Please try again later.</div>;
  }

  return (
    <>
      <div className="detail-container">
        <div className="detail-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}            
          />
        </div>
        <div className="detail-info">
          <h2 className="detail-title"> {movie.title}</h2>
          <h3 className="detail-tag">{movie.tagline}</h3>
          <p className="detail-release_date">Original Release: {movie.release_date}</p>
          <h3>Overview<p className="overview"> {movie.overview}</p></h3>
          <div className="detail-extra">
          <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
      <Link to={"/"} className="detail-back" >back</Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
