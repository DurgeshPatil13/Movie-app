import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import movies from '../data/movie'
const Home = () => {

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

export default Home