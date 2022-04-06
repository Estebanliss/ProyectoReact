import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
import '../styles/CartWidget.css';


const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </>



    )



}

export default CartWidget;