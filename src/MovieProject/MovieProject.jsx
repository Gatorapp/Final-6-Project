import "../MovieProject/MovieProject.css";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieProject ()  {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");


  const handleSearchSubmit = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: "1f990dab8f4e9c2064379663134a81ea",
          query: searchQuery,
        },
      }
    );
    setMovies(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            api_key: "1f990dab8f4e9c2064379663134a81ea",
          },
        }
      );
      setGenres(response.data.genres);
      console.log(response.data.genres);
    };
    fetchGenres();
  }, []);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "1f990dab8f4e9c2064379663134a81ea",
            sort_by: sortBy,
            page: 1,
            with_genres: selectedGenre,
            query: searchQuery,
          },
        }
      );
      setMovies(response.data.results);
      console.log(response.data.results);
    };
    fetchMovies();
  }, [searchQuery, sortBy, selectedGenre]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <>
      <div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search for Moives..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            <AiOutlineSearch /> Search/Reset
          </button>
        </div>

        <div className="filters">
          <label htmlFor="sort-by">Sort By:</label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="popularit.asc">Popular Descending</option>
            <option value="popularity.desc">Popular Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="release_date.desc">Release Date Descending</option>
            <option value="release_date.asc">Release Date Ascending</option>
          </select>
          <label htmlFor="genre">Genre:</label>
          <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="App">
        <div className="movie-wrapper">
          {movies.map((movie) => (
            <div key={movie.id} className="movie">
              <Link to={'/movie/'+ movie.id}>
                <div className="poster">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "data:image/png;base64,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"
                    }
                    alt={movie.title}
                  />
                </div>
                <div className="info">
                <div>
                  <h2 className="title">{movie.title}</h2>
                  <h4 className="release">{movie.release_date}</h4>
                  </div>
                  <p className="rating"> {movie.vote_average.toFixed(0)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieProject;
