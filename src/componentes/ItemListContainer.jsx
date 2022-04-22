import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
const { products } = require("../utils/products")

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === categoryId;
        }))
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    }, [categoryId]);    

    return (

        <div>
            <ItemList items={datos} />
        </div>

    );
};

export default ItemListContainer;




