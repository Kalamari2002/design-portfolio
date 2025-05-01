import styles from './footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <address>
                Gabriel Ikezaki <br/>
                San Diego, CA, USA <br/>
            </address>
            <span>
                <a href="https://www.linkedin.com/in/gabriel-ikezaki/">LinkedIn </a>|
                <a href="https://www.instagram.com/gikezaki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> Instagram </a>| 
                <a href="https://k4lamari.itch.io/"> Itch.io </a>| 
                <a href="https://github.com/Kalamari2002"> Github</a>
            </span>
        </footer>
    );
}

export default Footer