import { useContext, useState } from "react";
import {CartContext} from "../contexts/CartContext";
import { Item } from "../model/item";
import { CartItem } from "../model/cartItem";

interface Props {
  item: Item
}


export default function AddToCart({ item }: Props) {

  const cartContext = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cartContext)

  function addItemToCart(item: Item) {

    if(item.stock <= 0) {
      console.log("Item not added to cart, out of stock");
      return;
    }
    
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
          cartItems.map((cartItem) =>
          cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
      );
    } else {
      setCartItems([...cartItems, {id: item.id, item: item, quantity: 1, totalPrice: item.price} as CartItem]);
    }
  }

  return (
    <>
      <button
        className="btn btn-ghost btn-xl text-xl"
        onClick={() => addItemToCart(item)}
      >
        Add to Cart
      </button>
    </>
  );
}
