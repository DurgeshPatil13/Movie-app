import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ movie,genres }) => {
    
const genreNames = movie.genre_ids.map((id) => {
  return genres.find((genre) => genre.id === id).name;
});

return (
   <Link to={`/movie/${movie.id}`}>
   <div className="sm:w-64 w-52 h-full rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
  {/* Poster */}
  <div className="relative shrink-0">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      className="w-full h-60 object-cover"
      alt={movie.title}
    />

    {/* Rating */}
    <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
      <FaStar className="text-yellow-400" />
      {movie.vote_average.toFixed(1)}
    </div>

    {/* Favourite */}
    <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:text-pink-500 transition">
      <FaRegHeart />
    </button>
  </div>

  {/* Content Container */}
  <div className="flex flex-col flex-1 p-4">
    
    {/* Top Content: Title & Date grouped together */}
    <div>
      <h2 className="text-xl sm:text-2xl font-bold leading-tight line-clamp-2 title-min-height">
        {movie.title}
      </h2>
      <p className="text-gray-500 mt-1">
        {movie.release_date ? movie.release_date.slice(0,4) : 'N/A'}
      </p>
    </div>

    {/* Bottom Content: Genres (mt-auto pushes this to the bottom) */}
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {genreNames.map((name) => {
        return (
          <span
            key={name}
            // Adjusted classes slightly so they are visible on the white card background
            className="px-3 py-1 text-sm shadow-sm rounded-full bg-white border border-gray-100 font-medium text-gray-800"
          >
            {name}
          </span>
        );
      })}
    </div>
    
  </div>
</div>
    </Link>
  );
};

export default Card;