import styles from './gamecard.module.css'
import HoverVideoPlayer from 'react-hover-video-player';
import { HashRouter, Route, Routes, Link } from "react-router-dom";

function GameCard(props){
    const title = props.title;
    const thumbnail = props.thumbnail;
    const link = props.link;
    const description = props.description;
    const thumbAlt = `${title} - Thumbnail`;
    const videoFile = "/design-portfolio/assets/" + props.video;
    
    return(
        <div className={styles.card}>
            <Link to={link}>
            <HoverVideoPlayer
                videoSrc={videoFile}
                pausedOverlay={
                    <img src={thumbnail} title={title} alt={thumbAlt} />
                }
                />
            </Link>
            <header>
                <h3>
                    <Link to={link}>{title}</Link>
                </h3>
                <p>{description}</p>
            </header>
        </div>
    );
}

export default GameCard