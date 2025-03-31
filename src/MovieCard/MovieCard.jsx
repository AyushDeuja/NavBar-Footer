import React, { useState } from "react";
import "./movieCard.css";
const movieData = [
  {
    id: 1,
    title: "Magadheera",
    genre: "Drama",
  },
  {
    id: 2,
    title: "Inception",
    genre: "Crime",
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance",
  },
];

const MovieCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //filter movie on the basis of search of title
  const filterMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="movieCardContainer">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => (
            <div className="movieCard" key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.genre}</p>
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
