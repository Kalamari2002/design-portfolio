import GameCard from "./GameCard"
import styles from './gamegrid.module.css'

function GameGrid(){
    return(
        <div className={styles.grid}>
            <GameCard title="Kitchen Diver" 
            thumbnail="https://i.imgur.com/KoGjbdV.png" 
            link="https://k4lamari.itch.io/kitchen-diver"
            description='Brackeys Game Jam 2023.2. 
            Placed 16th in the "Overall" category and 14th in the "Fun" category out of 910 entries.' />

            <GameCard title="Running Low" 
            thumbnail="https://i.imgur.com/zooRWsu.png" 
            link="https://mateus-ikezaki.itch.io/running-low"
            description='Itchio Mini Jam 73: Power. Placed 14th in the "Overall" 
            category and 5th in the "Enjoyment" category out of 176 entries.' />
            
            <GameCard title="Weird Boss Battle" 
            thumbnail="https://i.imgur.com/A7ZBhzz.png" 
            link="https://mateus-ikezaki.itch.io/a-weird-boss-battle"
            description="Bear Jams Fall 2021." />
        </div>
    );
}

export default GameGrid