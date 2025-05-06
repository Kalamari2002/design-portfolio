import Header from "./Header";
import Footer from "./Footer";

function GamePage(props){
    const title = props.title;
    const video = props.video;
    const link = props.link;
    const description = props.description;
    return(
        <>
            <Header/>
            <a href={link} target="_blank">
                <h1>{title}</h1>
            </a>
            <iframe width="840" height="472" src={video} 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>{description}</p>
            <Footer/>
        </>
    );
}

export default GamePage