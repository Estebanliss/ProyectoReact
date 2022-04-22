import { createContext, useState } from "react";


export const CartContext = createContext();

const ContexProvider = ({children}) => {
    const [cartInfo, setCartInfo] = useState();

    const productsCart = (item, qty) => {
        let searchProducts = cartInfo.find(product => product.idItem === item.id);
        if ( searchProducts === undefined) {
            setCartInfo([
                ...cartInfo,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            searchProducts.qtyItem += qty;
        }
    }
    
    const removeList = () => {
        setCartInfo([]);
    }

    const deleteItem = (id) => {
        let result = cartInfo.filter(item => item.idItem !== id);
        setCartInfo(result);
    }

    return(

        <CartContext.Provider value={{cartInfo, productsCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default ContexProvider;