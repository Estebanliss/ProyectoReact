import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { IconCartWidget } from "./StyledComponents";


const CartWidget = () => {

    return (
        <>
            <IconCartWidget badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />
            </IconCartWidget>
        </>
    )
}

export default CartWidget;