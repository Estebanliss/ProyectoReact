import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { IconCartWidget } from "./StyledComponents";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () => {

    const contexProducts = useContext(CartContext);

    return (
        <>
            <IconCartWidget badgeContent={contexProducts.calcItemsQty()} color="secondary">
                <ShoppingCartOutlinedIcon />
            </IconCartWidget>
        </>
    )
}

export default CartWidget;