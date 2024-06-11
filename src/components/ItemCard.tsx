import { Link } from 'react-router-dom';
import { Item } from "../model/item";
import AddToCart from "./AddToCart";

interface Props {
    item: Item;
}

export default function ItemCard({ item }: Props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="item image"/></figure>
                <div className="card-body">
                    <Link key={item.id} to={`/item/${item.id}`}>
                        <h2 className="card-title">${item.price}</h2>
                        <p>{item.description}</p>
                        <p>Stock: {item.stock}</p>
                    </Link>
                    <div className="card-actions justify-end">
                    <AddToCart item={item} />
                    </div>
                </div>
        </div>
    )
}