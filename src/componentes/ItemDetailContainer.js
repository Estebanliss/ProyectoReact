import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemDetail from "../componentes/ItemDetails";
import { useParams } from "react-router-dom";
const { products } = require("../utils/products")

const ItemDetailContainer = (props) => {

    const [datos, setDatos] = useState([]);
    const { idItem } = useParams();


    useEffect(() => {
        customFetch(2000, products.find(item => item.id === idItem))
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    },  []);

    return (

        <>
            <ItemDetail items={datos} />
        </>

    );
};

export default ItemDetailContainer;





