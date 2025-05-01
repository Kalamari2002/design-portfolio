import styles from './gamecard.module.css'

function GameCard(props){
    const title = props.title;
    const thumbnail = props.thumbnail;
    const link = props.link;
    const description = props.description;
    const thumbAlt = `${title} - Thumbnail`;
    
    return(
        <div className={styles.card}>
            <a href={link} target="_blank">
                <img src={thumbnail} title={title} alt={thumbAlt} />
            </a>
            <header>
                <h3>
                    <a href={link} target="_blank">{title}</a>
                </h3>
                <p>{description}</p>
            </header>
        </div>
    );
}

export default GameCard