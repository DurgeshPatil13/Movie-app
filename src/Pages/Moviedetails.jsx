import React from 'react'
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieService";
import {
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { useState } from 'react';
import { useEffect } from 'react';

const Moviedetails = () => {
  const [movies, setMovie] = useState(null);
    const { id } = useParams();
const movieId = Number(id);
useEffect(() => {

  const fetchMovie = async () => {
const data = await getMovieDetails(id);
setMovie(data);
  };

  fetchMovie();

}, [movieId]);
  if (!movies) {
    return <h1>Loading...</h1>;
  }

return (
 <div className="min-h-screen bg-[#0b1120] flex justify-center items-center p-5">
      <div className="relative w-full max-w-7xl rounded-3xl border border-slate-700/60 bg-linear-to-br from-[#111827] via-[#0f172a] to-[#111827] p-8 shadow-2xl">

        <div className="grid lg:grid-cols-[400px_1fr] gap-10">

          {/* Poster */}
      <div className="grid lg:grid-cols-[420px_1fr] gap-12">

  <div className="h-190 overflow-hidden rounded-3xl">
    <img
  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
      alt={movies.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Content */}

</div>

          {/* Content */}
          <div>

            {/* Title */}
            <h1 className="text-6xl font-bold text-white">
              {movies.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400 text-3xl" />
                <span className="text-3xl font-semibold text-white">
              {movies.vote_average}
                </span>
              </div>

              <div className="w-px h-8 bg-slate-600" />

              <span className="text-3xl text-gray-400">
                {movies.year}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-4 mt-8">
          {movies.genres.map((genre) => (
  <span
    key={genre.id}
    className="px-6 py-3 rounded-xl bg-blue-900/40 text-blue-400 font-semibold text-lg"
  >
    {genre.name}
  </span>
))}
            </div>

            <hr className="my-10 border-slate-700" />

            {/* Overview */}
            <h2 className="text-4xl font-semibold text-white">
              Overview
            </h2>

            <p className="mt-6 text-gray-400 text-xl leading-10 max-w-4xl">
              {movies.overview}
            </p>

            <hr className="my-10 border-slate-700" />

            {/* Extra Info */}

            <div className="space-y-7 text-lg">

              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaCalendarAlt className="text-purple-400" />
                  Release Date
                </div>

                <span className="text-white">
      {movies.release_date}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaClock className="text-blue-400" />
                  Runtime
                </div>

                <span className="text-white">
               {movies.runtime} min
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <MdMovie className="text-cyan-400" />
                  Director
                </div>

                <span className="text-white">
                 Christopher Nolan
                </span>
              </div>

          

            </div>

          </div>

        </div>
      </div>
    </div>
);
}

export default Moviedetails