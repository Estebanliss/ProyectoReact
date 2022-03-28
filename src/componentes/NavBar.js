/* eslint-disable jsx-a11y/alt-text */
import Logo from "../imagenes/Logo.svg";
import CartWidget from "./CartWidget";


import "./NavBar.css"

const NavBar = () => {

    return (
        <>
            <div className="conteinerNavBar">
                <div className="containerLogo">
                    <img src={Logo}></img>
                </div>
                <div className="containerCategories">
                    <ul className="conteinerUl">
                        <li>Living</li>
                        <li>Room</li>
                        <li>Yard</li>
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