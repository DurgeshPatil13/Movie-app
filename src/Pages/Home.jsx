import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { getMovies } from "../services/movieService";
import { useEffect } from 'react';
import { getgenres } from '../services/movieService';
import { useState } from 'react';
import { searchMovies } from "../services/movieService";
import { BsArrowRight } from "react-icons/bs";

import { RotatingLines } from "react-loader-spinner";
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

const handleSearch = async () => {
  if (!search.trim()) {
    return;
  }
    setLoading(true);
  const data = await searchMovies(search);
  setstate(data);
  setLoading(false);
};
  if (loading) {
    return <div className="flex bg-[#0C0F17] items-center justify-center h-screen">
<RotatingLines
visible={true}
height="60"
width="60"
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
    <>
     <div className='bg-[#0C0F17]'>
<Navbar
    search={search}
    setSearch={setSearch}
    handleSearch={handleSearch}
/>
  <div className="text-white m-4 font-['Jost'] ml-5 flex text-3xl">
        TRENDING NOW <BsArrowRight className='mt-1.5 ml-2' />
      </div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch justify-items-center">
  {state.map((movie) => (
    <Card key={movie.id} movie={movie} genres={genres}/>
  ))}
<div className=" m-4 flex items-center gap-2 whitespace-nowrap text-3xl font-['Jost'] text-white">
  <span>TOP RATED</span>
  <BsArrowRight />
</div>
</div>
     </div>
    </>
  )
}

export default Home