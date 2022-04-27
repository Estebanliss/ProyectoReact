import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const ContexProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);

  const productsCart = (item, qty) => {
    let searchProducts = cartInfo.find((product) => product.idItem === item.id);

    if (searchProducts === undefined) {
      setCartInfo([
        ...cartInfo,
        {
          idItem: item.id,
          imgItem: item.image[0],
          nameItem: item.name,
          costItem: item.cost,
          qtyItem: qty,
        },
      ]);
    } else {
      //al encontrarlo, entonces aumentamos el qty de ese producto
      searchProducts.qtyItem += qty;
    }
  };

  const removeList = () => {
    setCartInfo([]);
  };

  const deleteItem = (id) => {
    let result = cartInfo.filter((item) => item.idItem !== id);

    setCartInfo(result);
  };

  const calcTotalPerItem = (idItem) => {
    let index = cartInfo.map((item) => item.idItem).indexOf(idItem);

    return parseInt((cartInfo[index].costItem * cartInfo[index].qtyItem).toFixed(2));
  };

  const calcItemsQty = () => {
    let qtys = cartInfo.map((item) => item.qtyItem);

    return qtys.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  const calcSubTotal = () => {
    let totalPerItem = cartInfo.map((item) => calcTotalPerItem(item.idItem));

    return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };

  const calcTaxes = () => {
    let Taxes = calcSubTotal() * 0.21;

    console.log(calcSubTotal());

    return Taxes.toFixed(2);
  };

  const calcTotal = () => {
    return calcSubTotal();
  };

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        productsCart,
        removeList,
        deleteItem,
        calcTotalPerItem,
        calcSubTotal,
        calcTaxes,
        calcTotal,
        calcItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContexProvider;
