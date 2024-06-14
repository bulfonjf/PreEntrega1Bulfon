import { Link } from 'react-router-dom';
import { Item } from "../model/item";
import { CartContext } from '../contexts/cart.js'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
    item: Item;
}

export default function ItemList({ item }: Props) {
    const notifyItemAddedToCart= () => toast.error(`Item added to cart`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: {
          backgroundColor: '#000',
          color: '#fff'
        }
    })

    const notifyItemWithoutStock= () => toast.error(`Item is out of stock`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: {
          backgroundColor: '#000',
          color: '#fff'
        }
    })


    const { addToCart } = useContext(CartContext)
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-3" style={{display: 'grid', gridGap: '1rem', gridTemplateColumns: '1fr 5fr'}} >
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
                    addToCart(item)
                    if(item.stock > 0) {
                        notifyItemAddedToCart()
                    } else {
                        notifyItemWithoutStock()
                    }
                    }}
                    >
                    Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}