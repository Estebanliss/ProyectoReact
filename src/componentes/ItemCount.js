import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from "styled-components";


const ContainerProducts = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const ProductQuantity = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState([]);

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
                stock
                ? <Button variant="contained" color="secondary" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                : <Button variant="contained" disabled>Agregar al Carrito</Button>
            }

        </ContainerProducts >
    );
}

export default ItemCount;