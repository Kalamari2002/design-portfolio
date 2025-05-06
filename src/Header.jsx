import { HashRouter, Route, Routes, Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h2>Gabriel Ikezaki</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header