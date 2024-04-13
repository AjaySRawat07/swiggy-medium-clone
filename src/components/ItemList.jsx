import { CDN_REST } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartStore";

export const ItemList = ({items}) =>{
    const dispatch = useDispatch();
    function handleClick(item){
        dispatch(addItem(item));
    }
    return(
        <div>
           {items.map((item)=>(
            <div key={item.card.info.id} className="bg-grey-400 m-2 p-4 border-b-4 flex justify-between">
                <div className="w-3/12">
                <div className="py-4 text-xl font-semibold">
                <span className="">{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-1/5 mb-36">
            <div className="absolute">
            
            <img src={CDN_REST+item.card.info.imageId} alt="Dish Img" 
            className="rounded-md w-42 h-28" />
            <button 
            className="text-xl text-green-600 text-center bg-zinc-200 rounded-md font-bold shadow-lg" 
            onClick={()=>handleClick(item)}>ADD</button>
            </div>
        </div>
        </div>
           ))} 
         </div>
         
    )}