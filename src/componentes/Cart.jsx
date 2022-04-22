// import { useContext } from 'react';
// import { CartContext } from './CartContext';
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const Cart = () => {
  // const contexProducts = useContext(CartContext);

    const ConteinerCart = styled.div`
        width: 60%;
        margin: auto;
        text-align: center;
    `;    

    const ButtonCart = styled.div`
        display: flex;
        justify-content: space-between;
    
    `;

    const DatosCart = styled.div`
        width: 100%;
        border: 1px solid #E0E0E0;
        border-radius: 10px;  
        margin-top: 20px;
        height: 500px;

    `;


    return (
        <ConteinerCart>
            <h1>Tu carrito</h1>
            <ButtonCart>
                <Button variant="outlined" color="primary">
                Seguir comprando
                </Button>
                <Button
                variant="outlined"
                color="secondary"
                startIcon={<DeleteIcon />}
                >
                Eliminar el carrito
                </Button>
            </ButtonCart>
            <DatosCart>
                <div>

                </div>
                <div>

                </div>
            </DatosCart>

        </ConteinerCart>

    );
};

export default Cart;
