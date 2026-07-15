import { useEffect, useState, useContext } from "react";
import { getgenres } from "../services/movieService";
import { FavouritesContext } from "../context/FavouritesContext";

import Card from "../components/Card";

const FavouritesPage = () => {
  const [genres, setGenres] = useState([]);
  const { favourites } = useContext(FavouritesContext);
useEffect(() => {
  const fetchGenres = async () => {
    const data = await getgenres();
    setGenres(data);
  };

  fetchGenres();
}, []);
  return (
    <div className="min-h-screen bg-[#0C0F17] font-['jost'] text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 border-b border-[#172a5af2] pb-5">
          <h1 className="text-3xl font-extrabold ">
            ❤️ Favourites
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {favourites.length} favourite
            {favourites.length !== 1 && "s"}
          </p>
        </div>

        {favourites.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <h2 className="text-3xl font-bold text-gray-700">
              No favourites yet
            </h2>

            <p className="mt-3 text-gray-500">
              Start adding movies by clicking the ❤️ icon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {favourites.map((movie) => (
  <Card
    key={movie.id}
    movie={movie}
    genres={genres}
  />
))}
          </div>
        )}

      </div>
    </div>
  );
};

export default FavouritesPage;