import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    const genreColors = {
  Action: "bg-red-100 text-red-600",
  Adventure: "bg-green-100 text-green-600",
  Fantasy: "bg-purple-100 text-purple-600",
  Drama: "bg-blue-100 text-blue-600",
  Crime: "bg-gray-200 text-gray-700",
  SciFi: "bg-cyan-100 text-cyan-600",
  Thriller: "bg-orange-100 text-orange-600",
  Mystery: "bg-indigo-100 text-indigo-600",
  History: "bg-amber-100 text-amber-700",
  Comedy: "bg-yellow-100 text-yellow-700",
  Horror: "bg-pink-100 text-pink-700",
};


return (
   <Link to={`/movie/${movie.id}`}>
    <div className="sm:w-64 w-52 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Poster */}
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-60 object-cover"
        />

        {/* Rating */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          <FaStar className="text-yellow-400" />
          {movie.rating}
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

        <p className="text-gray-500 mt-1">{movie.year}</p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mt-4">
         {movie.genres.map((genre) => (
  <span
    key={genre}
    className={`px-3 py-1 rounded-full font-medium ${
      genreColors[genre] || "bg-gray-100 text-gray-700"
    }`}
  >
    {genre}
  </span>
))}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;