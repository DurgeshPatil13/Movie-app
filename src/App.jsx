import { useState } from 'react'
import Favourites from './Pages/Favourites'
import Home from './Pages/Home'

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
  <Home/>
  <Favourites/>
  </>
  )
}

export default App
