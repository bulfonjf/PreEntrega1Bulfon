import { useContext, useState } from 'react'
import { CartContext } from '../contexts/cart'
import { CartItem } from '../model/cartItem'
import { Order } from '../model/order'
import { Link } from 'react-router-dom';
import Alert from './Alert';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { saveOrder, updateItem } from '../firebase/firebase.js'

export default function Checkout() {
    const { cartItems, clearCart, getCartTotal } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [verifyEmail, setVerifyEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        const handleSaveOrder = async (order: Order) => {
            try
            {
                let docRef = await saveOrder(order);
                setOrderId(docRef.id)

                order.cartItems.forEach(async (cartItem: CartItem) => {
                    cartItem.item.stock -= cartItem.quantity
                    if (cartItem.item.stock < 0) {
                        cartItem.item.stock = 0
                    }
                    await updateItem(cartItem.item)
                })
            } catch (error) {
                console.error('Error saving order', error)
            }
        };

        e.preventDefault()
        if (email !== verifyEmail) {
            notifyEmailsDoNotMatch()
            return
        }

        const order : Order = {
            name,
            surname,
            phone,
            email,
            cartItems,
            total: getCartTotal(),
            date: new Date(),
            status: 'generated'
        }

        handleSaveOrder(order);

        clearCart()
        clearForm()
    }

    const clearForm = () => {
        setName('')
        setSurname('')
        setPhone('')
        setEmail('')
        setVerifyEmail('')
    }

    const  handleNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		setName(event. target.value);
	};
    const  handleSurnameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		setSurname(event. target.value);
	};
    const  handlePhoneChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		setPhone(event. target.value);
	};
    const  handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event. target.value);
	};
    const  handleVerifyEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => {   
        setVerifyEmail(event. target.value);
    };

    const notifyEmailsDoNotMatch = () => toast.error(`Emails do not match`, {
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
    
    return (
        <>
        <div>
            <h1>Checkout</h1>
        </div>
        <div style={{display: 'grid', gridGap: '1rem', gridTemplateColumns: '1fr 3fr'}}>
            <div>
                <form className="form-control card-body w-full max-w-sm" >
                    
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name" value={name} onChange={handleNameChange}  />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Surname" value={surname} onChange={handleSurnameChange} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <input type="text" className="grow" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" value={email} onChange={handleEmailChange} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Verify Email" value={verifyEmail} onChange={handleVerifyEmailChange} />
                    </label>
                    <div className="card-actions justify-end">
                        <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={handleSubmit}
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <h1 className="text-2xl font-bold">Cart ${getCartTotal()}</h1>
                    <div className="overflow-x-auto">
                    <table className="table table-zebra text-xl">
                        <tbody>
                            {
                            cartItems.length === 0 ? (
                                <tr><td><Alert message='Cart is empty'/></td></tr>
                            ) : (
                                cartItems.map((cartItem : CartItem) => (
                                <tr key={cartItem.id}>
                                    <td>
                                    <div className="card lg:card-side bg-base-100 shadow-xl p-1">
                                        <figure><img src={cartItem.item.image} alt="item image"/></figure>
                                        <div className="card-body">
                                            <div>
                                                <Link key={cartItem.id} to={`/item/${cartItem.item.id}`}>
                                                    <h2 className="card-title">{cartItem.item.title} ${cartItem.item.price}</h2>
                                                    <p>{cartItem.item.description}</p>
                                                    <p>Quantity: {cartItem.quantity}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div>
                    {orderId && <Alert message={`Order saved with id: ${orderId}`}/>}
                </div>
            </div>
        </div>
        
        </>
    );
}