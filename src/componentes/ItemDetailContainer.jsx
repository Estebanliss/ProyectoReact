import React from "react";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetails";
import { useParams } from "react-router-dom";
const { products } = require("../utils/products").default;

const ItemDetailContainer = () => {

	const [datos, setDatos] = useState({});
	const { idItem } = useParams();

	useEffect(() => {
		customFetch(2000, products.find(item => item.id === parseInt(idItem)))
			.then(result => setDatos(result))
			.catch(error => console.log(error));
	}, [idItem]);    

	return (

		<>
			<ItemDetail item={datos} />
		</>

	);
};

export default ItemDetailContainer;





