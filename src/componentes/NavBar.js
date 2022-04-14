import { Link } from "react-router-dom";
import Logo from "../imagenes/LogoComic.svg";
import CartWidget from "./CartWidget";
import '../styles/NavBar.css';

const NavBar = ({ categoryId }) => {

    return (
        <>
            <div className="conteinerNavBar">
                <div className="containerLogo">
                    <Link to="/"><img src={Logo} alt=""></img></Link>
                </div>
                <div className="containerCategories">
                    <ul className="conteinerUl">
                    <Link to="/category/comic"><li>Comics</li></Link>
                    <Link to="/category/game>"><li>Juegos</li></Link>
                    <Link to="/category/movie"><li>Peliculas</li></Link>
                </ul>
            </div>
            <div className="containerLogin">
                <ul className="conteinerUl login">
                    <li>INGRESAR</li>
                    <CartWidget />
                </ul>
            </div>


        </div>
        </>

    );

};
export default NavBar;