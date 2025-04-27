import Header from "./Header"
import Footer from "./Footer";
import GameCard from "./GameCard";
//Our root
function App() {
  return(
    <>
      <Header />
      <GameCard title="Kitchen Diver" 
      thumbnail="https://i.imgur.com/KoGjbdV.png" 
      link="https://k4lamari.itch.io/kitchen-diver"
      description="Blah Blah Blah"></GameCard>
      <Footer />
    </>
  );
}

export default App
