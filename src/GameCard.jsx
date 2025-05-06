import styles from './gamecard.module.css'
import HoverVideoPlayer from 'react-hover-video-player';

function GameCard(props){
    const title = props.title;
    const thumbnail = props.thumbnail;
    const link = props.link;
    const description = props.description;
    const thumbAlt = `${title} - Thumbnail`;
    const videoFile = "/design-portfolio/assets/" + props.video;
    
    return(
        <div className={styles.card}>
            <a href={link}>
            <HoverVideoPlayer
                videoSrc={videoFile}
                pausedOverlay={
                    <img src={thumbnail} title={title} alt={thumbAlt} />
                }
                />
            </a>
            <header>
                <h3>
                    <a href={link}>{title}</a>
                </h3>
                <p>{description}</p>
            </header>
        </div>
    );
}

export default GameCard