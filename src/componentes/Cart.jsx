import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { serverTimestamp } from "firebase/firestore";

import { createOrderInFirestore } from "../utils/firestoreFetch";

import { CartContext } from "./CartContext";
import {
  ConteinerCart,
  ButtonCart,
  ProductOverview,
  DetailProduct,
  PurchaseDetail,
  ImagePurchase,
  DetailItem,
  PriceItem,
  ContainerItemCart,
  ButtonCartItem,
} from "./StyledComponents.jsx";

function Cart() {
  const contexProducts = useContext(CartContext);

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Leo Messi",
        phone: "123456789",
        email: "leo@messi.com",
      },
      items: contexProducts.cartInfo.map((item) => ({
        id: item.id,
        price: item.costItem,
        title: item.nameItem,
        qty: item.qtyItem,
        key: item.id,
      })),
      date: serverTimestamp(),
      total: contexProducts.calcTotal(),
    };

    createOrderInFirestore(order)
      .then((result) => alert("Tu orden ha sido creada con éxito. "))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));

    contexProducts.removeList();
  };

  console.log(contexProducts.cartInfo[0]);

  return (
    <ConteinerCart>
      <h1>Tu carrito</h1>
      <ButtonCart>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button color="primary" variant="outlined">
            Seguir comprando
          </Button>
        </Link>

        {contexProducts.cartInfo.length > 0 ? (
          <Button
            color="secondary"
            startIcon={<DeleteIcon />}
            variant="outlined"
            onClick={contexProducts.removeList}
          >
            Eliminar el carrito
          </Button>
        ) : (
          <h3>Tu carrito esta vacío</h3>
        )}
      </ButtonCart>
      <ProductOverview>
        <ContainerItemCart>
          {contexProducts.cartInfo.length > 0 &&
            contexProducts.cartInfo.map((item, index) => (
              <DetailProduct key={index}>
                <ImagePurchase src={item.imgItem} />
                <DetailItem>
                  <h3>{item.nameItem}</h3>
                </DetailItem>
                <PriceItem>
                  <p>
                    Cantidad:
                    <b>{item.qtyItem}</b>
                  </p>
                  <p>
                    Price:
                    <b>${contexProducts.calcTotalPerItem(item.idItem)}</b>
                  </p>
                </PriceItem>
                <ButtonCartItem>
                  <Button
                    style={{ fontSize: "10px" }}
                    variant="outlined"
                    onClick={() => contexProducts.deleteItem(item.id)}
                  >
                    Quitar
                  </Button>
                </ButtonCartItem>
              </DetailProduct>
            ))}
        </ContainerItemCart>
        {contexProducts.cartInfo.length > 0 && (
          <PurchaseDetail>
            <h3>Resumen de compra</h3>
            <p>
              Cantidad de productos:
              <b>{contexProducts.calcItemsQty()}</b>
            </p>
            <p>
              IVA:
              <b>${contexProducts.calcTaxes()}</b>
            </p>
            <h2>
              Total:
              <b>${contexProducts.calcSubTotal()}</b>
            </h2>
            <Button
              color="primary"
              style={{ width: "100%", backgroundColor: "#279E70" }}
              variant="contained"
              onClick={createOrder}
            >
              Finalizar y pagar
            </Button>
          </PurchaseDetail>
        )}
      </ProductOverview>
    </ConteinerCart>
  );
}

export default Cart;
