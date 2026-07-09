import React from 'react'
import { useParams } from "react-router-dom";
import movies from '../data/movie'
import {
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FiCopy } from "react-icons/fi";


const Moviedetails = () => {
    const { id } = useParams();
const movieId = Number(id);
      const movie=movies.find((elem)=>(
        elem.id===movieId
    ))
return (
 <div className="min-h-screen bg-[#0b1120] flex justify-center items-center p-5">
      <div className="relative w-full max-w-7xl rounded-3xl border border-slate-700/60 bg-linear-to-br from-[#111827] via-[#0f172a] to-[#111827] p-8 shadow-2xl">

        <div className="grid lg:grid-cols-[400px_1fr] gap-10">

          {/* Poster */}
      <div className="grid lg:grid-cols-[420px_1fr] gap-12">

  <div className="h-190 overflow-hidden rounded-3xl">
    <img
      src={movie.poster}
      alt={movie.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Content */}

</div>

          {/* Content */}
          <div>

            {/* Title */}
            <h1 className="text-6xl font-bold text-white">
              {movie.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400 text-3xl" />
                <span className="text-3xl font-semibold text-white">
                  {movie.rating}
                </span>
              </div>

              <div className="w-px h-8 bg-slate-600" />

              <span className="text-3xl text-gray-400">
                {movie.year}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-4 mt-8">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-6 py-3 rounded-xl bg-blue-900/40 text-blue-400 font-semibold text-lg"
                >
                  {genre}
                </span>
              ))}
            </div>

            <hr className="my-10 border-slate-700" />

            {/* Overview */}
            <h2 className="text-4xl font-semibold text-white">
              Overview
            </h2>

            <p className="mt-6 text-gray-400 text-xl leading-10 max-w-4xl">
              {movie.overview}
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
             2005
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaClock className="text-blue-400" />
                  Runtime
                </div>

                <span className="text-white">
                  {movie.runtime}
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