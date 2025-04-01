import React, { useState } from "react";
import "./movieCard.css";
import { movieData } from "./movieData";

const MovieCard = () => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("title");

  const filterMovies = movieData.filter((movie) => {
    if (searchItem === "title") {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    } else if (searchItem === "genre") {
      return movie.genre.toLowerCase().includes(search.toLowerCase());
    } else if (searchItem === "rating") {
      return movie.rating >= search;
    }
    return false;
  });

  return (
    <div className="movieContainer">
      <div className="inputField">
        <input
          style={{
            width: "80%",
            border: "2px solid black",
            borderRadius: "5px",
          }}
          type="text"
          placeholder={`Search movies on the basis of ${searchItem}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="searchOptions"
          id="searchOptions"
          className="selectContainer"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        >
          <option value="title">title</option>
          <option value="genre">genre</option>
          <option value="rating">rating</option>
        </select>
      </div>
      <div className="movieCardContainer">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => (
            <div className="movieCard" key={movie.id}>
              <img
                className="posterImage"
                src={movie.poster_url}
                alt="Movie-Image"
              />
              <h2>{movie.title}</h2>
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}⭐</p>
            </div>
          ))
        ) : (
          <h1>No movies found</h1>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
