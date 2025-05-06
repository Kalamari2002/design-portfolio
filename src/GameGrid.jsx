import GameCard from "./GameCard"
import styles from './gamegrid.module.css'

function GameGrid(){
    return(
        <div className={styles.grid}>
            <GameCard title="Kitchen Diver" 
            thumbnail="https://i.imgur.com/KoGjbdV.png" 
            link="/design-portfolio/kitchendiver"
            video="kitchen_diver.mp4"
            description='Brackeys Game Jam 2023.2. 
            Placed 16th in the "Overall" category and 14th in the "Fun" category out of 910 entries.' />

            <GameCard title="Running Low" 
            thumbnail="https://i.imgur.com/zooRWsu.png" 
            link="/design-portfolio/runninglow"
            video="running_low.mp4"
            description='Itchio Mini Jam 73: Power. Placed 14th in the "Overall" 
            category and 5th in the "Enjoyment" category out of 176 entries.' />
            
            <GameCard title="Weird Boss Battle" 
            thumbnail="https://i.imgur.com/A7ZBhzz.png" 
            link="/design-portfolio/weirdbossbattle"
            video="weird_boss_battle.mp4"
            description="Bear Jams Fall 2021." />
        </div>
    );
}

export default GameGrid