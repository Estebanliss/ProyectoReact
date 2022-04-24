import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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

const Cart = () => {
  const contexProducts = useContext(CartContext);

  return (
    <ConteinerCart>
      <h1>Tu carrito</h1>
      <ButtonCart>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="primary">
            Seguir comprando
          </Button>
        </Link>


        {
            (contexProducts.cartInfo.length > 0)
            
            ?   <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={contexProducts.removeList}
                >
                    Eliminar el carrito
                </Button>
                
            : <h3>Tu carrito esta vacío</h3>
        }
      </ButtonCart>
      <ProductOverview>
        <ContainerItemCart>
          {contexProducts.cartInfo.length > 0 &&
            contexProducts.cartInfo.map((item) => (
                <DetailProduct key={item.idItem}>
                    <ImagePurchase
                    src={item.imgItem}
                    ></ImagePurchase>
                    <DetailItem>
                    <h3>{item.nameItem}</h3>
                    </DetailItem>
                    <PriceItem>
                    <p>
                        Cantidad: <b>{item.qtyItem}</b>
                    </p>
                    <p>
                        Price: <b>$ {contexProducts.calcTotalPerItem(item.idItem)}</b>
                    </p>
                    </PriceItem>
                    <ButtonCartItem>
                        <Button variant="outlined" style={{ fontSize: "10px" }} onClick={() => contexProducts.deleteItem(item.idItem)}>
                            Quitar
                        </Button>
                    </ButtonCartItem>
                </DetailProduct>
            ))}
        </ContainerItemCart>
        <PurchaseDetail>
          <h3>Resumen de compra</h3>
          <p>Cantidad de productos</p>
          <p>Total</p>
          <p>Descuento</p>
          <h2>Total</h2>
        </PurchaseDetail>
      </ProductOverview>
    </ConteinerCart>
  );
};

export default Cart;
