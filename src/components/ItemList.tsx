import { Link } from 'react-router-dom';
import { Item } from "../model/item";
import { CartContext } from '../contexts/cart.js'
import { useContext } from 'react'

interface Props {
    item: Item;
}

export default function ItemList({ item }: Props) {
    const { addToCart } = useContext(CartContext)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-1">
            <figure><img src={item.image} alt="item image"/></figure>
            <div className="card-body">
                <Link key={item.id} to={`/item/${item.id}`}>
                    <h2 className="card-title">{item.title} ${item.price}</h2>
                    <p>{item.description}</p>
                    <p>Stock: {item.stock}</p>
                </Link>
                <div className="card-actions justify-start">
                    <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                    addToCart(item)}}
                    >
                    Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}