import React, { useEffect, useState } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
const Card = ({ movie, genres }) => {

const { favourites, toggleFavourite } = useContext(FavouritesContext);

const isFavourite = favourites.some(
  (fav) => fav.id === movie.id
);
  const genreNames = movie.genre_ids.map((id) => {
    const found = genres.find((genre) => genre.id === id);
    return found?.name;
  });

const handleFavourite = (e) => {
  e.preventDefault();
  toggleFavourite(movie);
};


  return (
    
    <Link to={`/movie/${movie.id}`}>
    
     <div className="borde font-['jost'] border-[#172a5af2] hover:border-[#e8b44cd6] group sm:w-64 w-52 h-full rounded-2xl  hover:shadow-[0_0_20px_rgba(255,215,0,0.35)]  hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
    <div className="relative shrink-0 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
className="w-full h-60 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            alt={movie.title}
          />

          {/* Rating */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-linear-to-b from-white/35 to-white/15
backdrop-blur-xl
border-b border-white/40
shadow-[0_8px_32px_rgba(31,38,135,0.12)] text-white px-3 py-1 rounded-full text-sm">
            <FaStar className="text-yellow-400" />
            {movie.vote_average.toFixed(1)}
          </div>

          {/* Favourite */}
          <button onClick={handleFavourite}
            className="absolute top-3 right-3 h-10 w-10 rounded-full bg-linear-to-b from-white/35 to-white/15
backdrop-blur-xl
border-b border-white/40
shadow-[0_8px_32px_rgba(31,38,135,0.12)] flex items-center justify-center text-white hover:text-pink-500 transition"
          >
           {isFavourite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
 
          </button>
        </div>

        {/* Content */}
        <div className="flex text-[#dfdedee2] flex-col bg-[#161B26] flex-1 p-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight line-clamp-2">
              {movie.title}
            </h2>

            <p className="text-gray-500 mt-1">
              {movie.release_date
                ? movie.release_date.slice(0, 4)
                : "N/A"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto  pt-4">
            {genreNames.map((name) => (
              <span
                key={name}
            className="px-3 py-1 rounded-full
bg-[#222630]
border-2 border-[#1b2171cb]
text-white
text-sm font-medium
"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;