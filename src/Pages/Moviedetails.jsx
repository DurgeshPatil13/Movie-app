import React from 'react'
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieService";
import { RotatingLines } from "react-loader-spinner";
import { GoArrowLeft } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);
    const { id } = useParams();
const movieId = Number(id);
useEffect(() => {

  const fetchMovie = async () => {
    setLoading(true);
const data = await getMovieDetails(id);
setMovie(data);
    setLoading(false);
  };

  fetchMovie();

}, [movieId]);
  if (loading) {
    return <div className="flex items-center justify-center bg-[#0C0F17] h-screen">

<RotatingLines
visible={true}
height="80"
width="80"
color="grey"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""
/>
</div>
  }

return (
  
 <div className="min-h-screen font-['jost'] relative bg-[#14161c] flex justify-center items-center p-5">
    <Link to={`/`}>
  <div>
  
<BsArrowLeft className='text-white absolute m-4 top-0 left-0 text-4xl' />

  </div>
  </Link>
      <div className="relative w-full max-w-7xl ">

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
              <div className="flex items-center border bg-[#121721] border-[#9A7A38] rounded-3xl p-1 px-3 gap-2">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="text-3xl font-semibold text-white">
              {movies.vote_average.toFixed(1)}
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
    className="px-6 py-3 rounded-2xl bg-[#121721] text-[#C1524B] border border-[#e88f8989] font-semibold text-lg"
  >
    {genre.name}
  </span>
))}
            </div>

            <hr className="my-10 border-slate-700" />

            {/* Overview */}
            <h2 className="text-4xl font-semibold text-yellow-400">
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
                  <FaCalendarAlt className="text-[#E8B34C]" />
                  Release Date
                </div>

                <span className="text-white">
      {movies.release_date}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <FaClock className="text-[#E8B34C]" />
                  Runtime
                </div>

                <span className="text-white">
               {movies.runtime} min
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