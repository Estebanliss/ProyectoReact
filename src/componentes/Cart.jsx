import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
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

	return (
		<ConteinerCart>
			<h1>Tu carrito</h1>
			<ButtonCart>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Button variant="outlined" color="primary">
            Seguir comprando
					</Button>
				</Link>

				{contexProducts.cartInfo.length > 0 ? (
					<Button
						variant="outlined"
						color="secondary"
						startIcon={<DeleteIcon />}
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
					{contexProducts.cartInfo.length > 0
            && contexProducts.cartInfo.map((item) => (
            	<DetailProduct key={item.idItem}>
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
            				<b>{contexProducts.calcTotalPerItem(item.idItem)}</b>
            			</p>
            		</PriceItem>
            		<ButtonCartItem>
            			<Button
            				variant="outlined"
            				style={{ fontSize: "10px" }}
            				onClick={() => contexProducts.deleteItem(item.idItem)}
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
							<b>{contexProducts.calcTaxes()}</b>
						</p>
						<h2>
              Total:
							<b>{contexProducts.calcSubTotal()}</b>
						</h2>
					</PurchaseDetail>
				)}
			</ProductOverview>
		</ConteinerCart>
	);
}

export default Cart;
