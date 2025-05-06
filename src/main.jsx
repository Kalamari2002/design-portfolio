import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GamePage from './GamePage.jsx'
import About from './About.jsx'
import KitchenDiver from './KitchenDiver.jsx'
import RunningLow from './RunningLow.jsx'
import WeirdBossBattle from './WeirdBossBattle.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/design-portfolio/",element:<App/>},
  {path:"/design-portfolio/about",element:<About/>},
  {path:"/design-portfolio/kitchendiver",element:<KitchenDiver/>},
  {path:"/design-portfolio/runninglow",element:<RunningLow/>},
  {path:"/design-portfolio/weirdbossbattle",element:<WeirdBossBattle/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
