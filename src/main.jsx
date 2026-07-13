import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import "./index.css";

import Favourites from './Pages/Favourites.jsx'
import Moviedetails from './Pages/Moviedetails.jsx'
import Home from './Pages/Home.jsx'
import { FavouritesProvider } from "./context/FavouritesContext";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
       path:"/favourites",
    element:<Favourites/>
  },
{
  path: "/movie/:id",
  element: <Moviedetails />
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavouritesProvider>
   <RouterProvider router={router}/>
</FavouritesProvider>

  
  </StrictMode>,
)
