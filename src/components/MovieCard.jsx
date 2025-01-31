import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="rounded border p-3 ">
      <h2>Title: {movie.title}</h2>
      <h2>Rating: {movie.rating}</h2>
    </div>
  );
};

export default MovieCard;
