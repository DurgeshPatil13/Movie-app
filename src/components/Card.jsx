import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    


return (
   <Link to={`/movie/${movie.id}`}>
    <div className="sm:w-64 w-52 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Poster */}
      <div className="relative">
        <img
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      
          className="w-full h-60 object-cover"
        />

        {/* Rating */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          <FaStar className="text-yellow-400" />
    {movie.vote_average}
        </div>

        {/* Favourite */}
        <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:text-pink-500 transition">
          <FaRegHeart />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-2xl font-bold leading-tight  line-clamp-2">
          {movie.title}
        </h2>

        <p className="text-gray-500 mt-1">{movie.release_date.slice(0,4)}</p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mt-4">
       
  <span
  
    className={"px-3 py-1 rounded-full font-medium"}
  >
  horror
  </span>

        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;