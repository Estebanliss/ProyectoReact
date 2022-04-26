import React from "react";
import { Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { ContainerGeneral, ContainerImage, ProductsImage, ContainerDetails, Title, Description, Price } from "./StyledComponents.jsx";

const ItemDetail = ( item ) => {
	const [itemCount, setItemCount] = useState(0);
	const contexProducts = useContext(CartContext);

	const onAdd = (qty) => {
		alert("Seleccionaste " + qty + " items.");
		setItemCount(qty);
		contexProducts.productsCart(item, qty);
	};

	return (
		<>
			{item && item.image ?
				<ContainerGeneral>
					<ContainerImage>
						<ProductsImage src={item.image[0]} />
					</ContainerImage>
					<ContainerDetails>
						<Title>{item.name}</Title>
						<Description>${item.description}</Description>
						<Price>${item.cost}</Price>

						{itemCount === 0
							? (<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />)
							: (<Link to='/cart' style={{ textDecoration: "none" }}><Button variant="contained" color="primary" style={{ marginTop: "20px" }}>Ir al carrito</Button></Link>)}
					</ContainerDetails>
				</ContainerGeneral>
				:<p>Banca un toque...</p>}
		</>
	);
};

export default ItemDetail;
