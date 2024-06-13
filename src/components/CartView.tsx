import { useContext } from 'react'
import { CartContext } from '../contexts/cart.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Item } from '../model/item.js'
import { CartItem } from '../model/cartItem.js'
import Alert from './Alert';
import { Link } from 'react-router-dom';

export default function Cart () {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  console.log('CartItems');
  console.log(cartItems);

  const notifyRemovedFromCart = (item : Item) => toast.error(`${item.title} removed from cart!`, {
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

  const notifyCartCleared = () => toast.error(`Cart cleared!`, {
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

  const handleRemoveFromCart = (item : Item) => {
    removeFromCart(item)
    notifyRemovedFromCart(item)
  }

  return (
    <>
    <ToastContainer />
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="overflow-x-auto">
      <table className="table table-zebra text-xl">
        <tbody>
          <tr>
            {
              cartItems.length === 0 ? (
                <td><Alert message='Cart is empty'/></td>
              ) : (
                cartItems.map((cartItem : CartItem) => (
                <td key={cartItem.id}>
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={cartItem.item.image} alt="item image"/></figure>
                    <div className="card-body">
                      <div>
                        <Link key={cartItem.id} to={`/item/${cartItem.item.id}`}>
                          <h2 className="card-title">{cartItem.item.title} ${cartItem.item.price}</h2>
                          <p>{cartItem.item.description}</p>
                        </Link>
                      </div>
                      <div className="card-actions justify-start">
                        <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          addToCart(cartItem.item)
                        }}
                        >
                          +
                        </button>
                        <p style={{ flexGrow: '0' }}>{cartItem.quantity}</p>
                        <button
                          className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                          onClick={() => {
                            const cartItemToRemove : CartItem | undefined = cartItems.find((ci : CartItem) => ci.id === cartItem.id);
                            if (cartItemToRemove?.quantity === 1) {
                              handleRemoveFromCart(cartItemToRemove.item);
                            } else {
                              removeFromCart(cartItemToRemove ? cartItemToRemove.item : {} as Item);
                            }
                          }}
                        >
                        -
                      </button>
                      </div>
                    </div>
                </div>
                </td>
              ))
            )}
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex flex-col justify-between items-center">
      <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
      <button
        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        onClick={() => {
          clearCart()
          notifyCartCleared()
        }}
      >
        Clear cart
      </button>
    </div>
    </>
  )
}