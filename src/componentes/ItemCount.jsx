import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ContainerProducts, ProductQuantity } from "./StyledComponents.jsx"

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    console.log(count)

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    function increment() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <ContainerProducts>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            <ProductQuantity>{count}</ProductQuantity>
            <Button variant="text" onClick={increment}><Add /></Button>
            {
                stock && count
                ? <Button variant="contained" color="secondary" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                : <Button variant="contained" disabled>Agregar al Carrito</Button>
            }

        </ContainerProducts >
    );
}

export default ItemCount;