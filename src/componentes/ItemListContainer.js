import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import ItemCount from '../componentes/ItemCount';
const { products } = require("../utils/products")

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);


    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    }, []);

    const onAdd = (qty) => {
        alert("Seleccionaste el producto" + qty);
    }
    

    return (

        <div>
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>

    );
};

export default ItemListContainer;





