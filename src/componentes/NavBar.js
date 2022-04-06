/* eslint-disable jsx-a11y/alt-text */
import Logo from "../imagenes/LogoComic.svg";
import CartWidget from "./CartWidget";
import '../styles/NavBar.css';

const NavBar = () => {

    return (
        <>
            <div className="conteinerNavBar">
                <div className="containerLogo">
                    <img src={Logo}></img>
                </div>
                <div className="containerCategories">
                    <ul className="conteinerUl">
                        <li>Comics</li>
                        <li>Juegos</li>
                        <li>Novedades</li>
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