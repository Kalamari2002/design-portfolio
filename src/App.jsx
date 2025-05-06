import Header from "./Header"
import Footer from "./Footer";
import GameGrid from "./GameGrid";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
//Our root
function App() {
  return(
    <HashRouter>

      <Header />
      <h1>Home</h1>
      <GameGrid/>
      <Footer />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="#/about" element={<About />} />
      </Routes>
  </HashRouter>
  );
}

export default App
