import {useSelector} from "react-redux";
import { ItemList } from "./ItemList";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartStore";


const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    return (
    <div className="text-center  m-4 p-4 font-bold text-xl ">
        <h1 className="text-2xl font-bold m-2 text-green-600 m-2 bg">Cart🛍️</h1>
        <button className="bg-red-400 ml-96 text-white p-2 rounded-lg"
        onClick={handleClearCart}
        >Clear🧹</button>
        {cartItems.length === 0 && <h1 className="text-3xl m-4 p-4 font-bold ">Oops 😱 your card is Empty!!!</h1>}
        <div className="w-6/12 m-auto">
        <ItemList items={cartItems}/>
        </div>
    </div>
    )
}

export default Cart;