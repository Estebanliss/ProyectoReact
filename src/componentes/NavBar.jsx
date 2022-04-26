import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imagenes/LogoComic.svg";
import CartWidget from "./CartWidget";
import { ConteinerNavBar, ContainerLogo, ContainerCategories, ContainerUl, ContainerUlLogin, ContainerLi, ContainerLogin, ImageProducts } from "./StyledComponents";

const NavBar = () => {
 
	return (
		<>
			<ConteinerNavBar>
				<ContainerLogo>
					<Link to="/"><ImageProducts src={Logo} alt=""></ImageProducts></Link>
				</ContainerLogo>
				<ContainerCategories>
					<ContainerUl>
						<Link to="/category/comic" style={{textDecoration: "none", color: "white"}}><ContainerLi>Comics</ContainerLi></Link>
						<Link to="/category/game" style={{textDecoration: "none", color: "white"}}><ContainerLi>Juegos</ContainerLi></Link>
						<Link to="/category/movie" style={{textDecoration: "none", color: "white"}}><ContainerLi>Peliculas</ContainerLi></Link>
					</ContainerUl>
				</ContainerCategories>
				<ContainerLogin>
					<ContainerUlLogin>
						<ContainerLi>INGRESAR</ContainerLi>
						<CartWidget />
					</ContainerUlLogin>
				</ContainerLogin>
			</ConteinerNavBar>
		</>

	);

};
export default NavBar;