import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.module";

function Navbar (){
    /**
     * menggunakan style yang sudah di import   
     * memanggilnya menggunakan expresion
     */
    return (
        <StyledNavbar>
        <div className="container">
            <nav className="navbar">
                <div>
                    <h1 className="navbar__brand">Covid App</h1>
                </div>
                <div>
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link to="/"> Global </Link>
                        </li>   
                        <li className="navbar__item">
                            <Link to="/wilayah/indonesia">Indonesia</Link>
                        </li>   
                        <li className="navbar__item">
                            <Link to="/wilayah/provinsi">Provinsi</Link>
                        </li>   
                        <li className="navbar__item">
                            <Link to="/wilayah/about">About</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        </div>
        </StyledNavbar>
    )
}

export default Navbar