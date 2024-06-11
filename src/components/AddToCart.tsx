import { useContext } from "react";
import {CartContext} from "../contexts/CartContext";
import { Item } from "../model/item";

interface Props {
  item: Item
}



export default function AddToCart({ item }: Props) {

  const cartContext = useContext(CartContext);

  function handleClick(item: Item) {

    if(item.stock <= 0) {
      console.log("Out of stock");
      return;
    }
    
    let cartItem = cartContext.find((cartItem) => cartItem.id === item.id);
  
    if (cartItem && cartItem.quantity <= item.stock) {
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.quantity * item.price;
      console.log("Increase item to cart");
      return;
    } else if (cartItem && cartItem.quantity > item.stock) {
      console.log("Out of stock");
    } else {
      cartItem = {
        id: item.id,
        quantity: 1,
        totalPrice: item.price
      };
      console.log("Add item to cart");
      cartContext.push(cartItem);
    }
  }

  return (
    <>
      <button
        className="btn btn-ghost btn-xl text-xl"
        onClick={() => handleClick(item)}
      >
        Add to Cart
      </button>
    </>
  );
}
