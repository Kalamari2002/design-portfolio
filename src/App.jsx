import Header from "./Header"
import Footer from "./Footer";
import GameGrid from "./GameGrid";
import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import KitchenDiver from './KitchenDiver.jsx'
import RunningLow from './RunningLow.jsx'
import WeirdBossBattle from './WeirdBossBattle.jsx'
//Our root
function App() {
  return(
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/kitchendiver" element={<KitchenDiver/>}/>
        <Route path="/runninglow" element={<RunningLow/>}/>
        <Route path="/weirdbossbattle" element={<WeirdBossBattle/>}/>
      </Routes>
    </>
  );
}

export default App
