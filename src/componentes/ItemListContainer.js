import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList"
const { products } = require("../utils/products")

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .cach(error => console.log(error))
    })

    return (

        <div>
            <p>Esto sería lo que trae por props: "{props.contenido}"</p>
            <ItemList item={datos}/>
        </div>

    );
};

export default ItemListContainer;





