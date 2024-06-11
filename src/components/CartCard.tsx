import { CartItem } from "../model/cartItem";
import RemoveFromCart from "./RemoveFromCart";


interface Props {
    cartItem: CartItem;
}

export default function CartCard({ cartItem }: Props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-4">
                <figure><img src={cartItem.item.image} alt="item image"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Total: ${cartItem.totalPrice}</h2>
                    <p>{cartItem.item.description}</p>
                    <p>- You are buying: {cartItem.quantity}</p>
                    <p>- Item price: {cartItem.item.price}</p>
                    <div className="card-actions justify-end">
                        <RemoveFromCart item={cartItem.item} />
                    </div>
                </div>
        </div>
    )
}