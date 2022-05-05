import React from "react";
import { Link } from "react-router-dom";

import Logo from "../imagenes/LogoComic.svg";

import CartWidget from "./CartWidget";
import {
  ConteinerNavBar,
  ContainerLogo,
  ContainerCategories,
  ContainerUl,
  ContainerUlLogin,
  ContainerLi,
  ContainerLogin,
  ImageProducts,
} from "./StyledComponents";

const NavBar = () => {
  return (
    <>
      <ConteinerNavBar>
        <ContainerLogo>
          <Link to="/">
            <ImageProducts alt="" src={Logo} />
          </Link>
        </ContainerLogo>
        <ContainerCategories>
          <ContainerUl>
            <Link style={{ textDecoration: "none", color: "white" }} to="/category/comic">
              <ContainerLi>Comics</ContainerLi>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/category/game">
              <ContainerLi>Juegos</ContainerLi>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/category/movie">
              <ContainerLi>Peliculas</ContainerLi>
            </Link>
          </ContainerUl>
        </ContainerCategories>
        <ContainerLogin>
          <ContainerUlLogin>
            <ContainerLi>INGRESAR</ContainerLi>
            <Link to={"/Cart"}>
              <CartWidget />
            </Link>
          </ContainerUlLogin>
        </ContainerLogin>
      </ConteinerNavBar>
    </>
  );
};

export default NavBar;
