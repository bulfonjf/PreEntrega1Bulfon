import { useContext, useState } from "react";
import {CartContext} from "../contexts/CartContext";
import { Item } from "../model/item";

interface Props {
  item: Item
}

export default function RemoveFromCart({ item }: Props) {

  const cartContext = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cartContext)


  function removeCartItem(item: Item) {

    const isItemInCart = cartContext.find((cartItem) => cartItem.id === item.id);
  
    if (isItemInCart && isItemInCart.quantity > 0) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.quantity--;
            cartItem.totalPrice = cartItem.quantity * item.price;
          } 
          return cartItem;
        })
      );
      console.log("Item decrease from cart");
    } else if (isItemInCart && isItemInCart.quantity === 0) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== item.id)
      );
      console.log("Item removed from cart");
    } else {
      console.log("Item not in cart");
    }
  }

  return (
    <>
      <button
        className="btn btn-ghost btn-xl text-xl"
        onClick={() => removeCartItem(item)}
      >
        Remove from Cart
      </button>
    </>
  );
}
