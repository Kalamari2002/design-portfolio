import Header from "./Header";
import Footer from "./Footer";

function About(){
    return(
        <>
            <Header/>
            <h1>About me</h1>
            <p>
                I'm a CS major at UCSD, and I'm eager to start my career in the software or, better yet, gaming industry! 
                In the past 3 years studying computer science, I've gained invaluable experience building apps, programs, algorithms and 
                everything code related (this very portfolio began as a course project). But really, I started pursuing this journey all 
                because of game development. It was the joy of creating little games with my brother as a kid that led me to this field, 
                and even today I'd say video games are still my favorite projects to be a part of.
            </p>
            <Footer/>
        </>
    );
}

export default About