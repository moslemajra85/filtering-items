import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 hover:shadow-xl hover:animate-shake">
      {/* Movie Poster */}
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Movie Details */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-900">{movie.title}</h2>
        <p className="text-gray-600 text-sm">{movie.genre}</p>
        <p className="mt-2 text-yellow-500 font-semibold">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
