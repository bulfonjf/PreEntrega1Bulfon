import { Item } from "../model/item";
import AddToCart from "./AddToCart";


interface Props {
    item: Item;
}

export default function ItemCard({ item }: Props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">${item.price}</h2>
                    <p>{item.description}</p>
                    <p>Stock: {item.stock}</p>
                    <div className="card-actions justify-end">
                    <AddToCart name={item.description} price={item.price} />
                    </div>
                </div>
        </div>
    )
}