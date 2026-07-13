import { createContext, useState,  useEffect} from "react";

export const FavouritesContext = createContext();
export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
const toggleFavourite = (movie) => {
  setFavourites((prev) => {
    const exists = prev.some((fav) => fav.id === movie.id);

    if (exists) {
      return prev.filter((fav) => fav.id !== movie.id);
    }

    return [...prev, movie];
  });
};
  useEffect(() => {
  const saved =
    JSON.parse(localStorage.getItem("favourites")) || [];

  setFavourites(saved);
}, []);
useEffect(() => {
  localStorage.setItem(
    "favourites",
    JSON.stringify(favourites)
  );
}, [favourites]);
  return (
    <FavouritesContext.Provider
     value={{ favourites, toggleFavourite }} >
{children}
    </FavouritesContext.Provider>
  );
};