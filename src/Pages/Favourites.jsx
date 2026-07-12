import React from 'react';

// Mock data based on your movie app structure
const favoriteMovies = [
  
];

// Reusable Star SVG
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// Reusable Heart SVG (Filled for favorites)
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md cursor-pointer hover:scale-110 transition-transform">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Rating Overlay */}
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <StarIcon />
          <span className="text-white text-sm font-semibold">{movie.rating}</span>
        </div>

        {/* Favorite Icon Overlay */}
        <div className="absolute top-3 right-3">
          <HeartIcon />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">
          {movie.title}
        </h3>
        
        <div className="text-gray-500 text-sm mb-4">
          {movie.year} &bull; {movie.duration}
        </div>

        {/* Tags Container */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {movie.genres.map((genre, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-100"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FavouritesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8 border-b border-gray-200 pb-5">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Favourites
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Your curated list of must-watch movies.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FavouritesPage;