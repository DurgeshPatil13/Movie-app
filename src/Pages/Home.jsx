import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { getMovies } from "../services/movieService";
import { useEffect } from 'react';
import { getgenres } from '../services/movieService';
import { useState } from 'react';
import { searchMovies } from "../services/movieService";
const Home = () => {
   const [loading, setLoading] = useState(true);
  const [state,setstate]=useState([]);
const[genres,setgenres]=useState([]);
   const [search,setSearch]=useState("");
useEffect(()=>{
 const fetchMovies = async () => {
  setLoading(true);
    const data = await getMovies();
    setstate(data);
    setLoading(false);
  };

  fetchMovies();

},[])

useEffect(()=>{
 const fetchMovies2 = async () => {
    const data2 = await getgenres();
    setgenres(data2);
  };

  fetchMovies2();

},[])
console.log(state);
const handleSearch = async () => {
  if (!search.trim()) {
    return;
  }
  const data = await searchMovies(search);
  setstate(data);
};
  if (loading) {
    return <div className="flex items-center justify-center h-screen">
  <div
    className="w-14 h-14 rounded-full animate-spin"
    style={{
      background:
        "conic-gradient(from 0deg, #e2e8f0 0deg, #e2e8f0 220deg, #2c7a93 320deg, #2c7a93 360deg)",
      WebkitMask:
        "radial-gradient(farthest-side, transparent calc(100% - 6px), black 0)",
      mask:
        "radial-gradient(farthest-side, transparent calc(100% - 6px), black 0)",
    }}
  />
</div>
  }



  return (
    <>
     <div className=''>
<Navbar
    search={search}
    setSearch={setSearch}
    handleSearch={handleSearch}
/>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch justify-items-center">
  {state.map((movie) => (
    <Card key={movie.id} movie={movie} genres={genres}/>
  ))}
</div>
     </div>
    </>
  )
}

export default Home