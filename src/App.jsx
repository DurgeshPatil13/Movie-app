import { useState } from 'react'
import Navbar from './components/Navbar'

import Card from './components/Card'
function App() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 8.7,
      year: 2014,
      genres: ["Sci-Fi", "Adventure"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgn7tSCyTHZUjPyGgheDYh2NL5E1bhIfOtKWYBq9v-w&s=10"
    },
    {
      id: 2,
      title: "Inception",
      rating: 8.8,
      year: 2010,
      genres: ["Action", "Sci-Fi"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdhunAp1tS2_sCHf1rZUqd94v0mLoq2nHrAYFoyBWlg&s=10"
    },
     {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    year: 2008,
    genres: ["Action", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    rating: 8.4,
    year: 2019,
    genres: ["Action", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 5,
    title: "Joker",
    rating: 8.4,
    year: 2019,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    rating: 8.2,
    year: 2021,
    genres: ["Action", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  },
  {
    id: 7,
    title: "Dune",
    rating: 8.0,
    year: 2021,
    genres: ["Sci-Fi", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  },
  {
    id: 8,
    title: "Oppenheimer",
    rating: 8.6,
    year: 2023,
    genres: ["Drama", "History"],
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
  },
  {
    id: 9,
    title: "Top Gun: Maverick",
    rating: 8.3,
    year: 2022,
    genres: ["Action", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
  },
  {
    id: 10,
    title: "The Batman",
    rating: 7.8,
    year: 2022,
    genres: ["Action", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  },
    {
    id: 11,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genres: ["Drama", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    id: 12,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: ["Drama", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 13,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 14,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 15,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    genres: ["Action", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 16,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genres: ["Thriller", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 17,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.9,
    genres: ["Fantasy", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    id: 18,
    title: "Avatar",
    year: 2009,
    rating: 7.9,
    genres: ["Sci-Fi", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 19,
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    genres: ["Action", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  },
  {
    id: 20,
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    genres: ["Action", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  },
  ];

  return (
    <>
     <div className=''>
<Navbar/>
<div className='grid mx-2 justify-items-center gap-8  grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
{movies.map((movie)=> (
  <Card id={movie.id} movie={movie}/>
))}

</div>
     </div>
    </>
  )
}

export default App
