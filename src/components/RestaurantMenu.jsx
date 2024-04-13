import {  useParams } from "react-router-dom";
import ShimmerMenu from "../utils/ShimmerMenu";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState} from "react";


const RestaurantMenu = () =>{
   

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const dummy = 'Dummy Data';

    const[showIndex,setShowIndex] = useState(null);
    if(resInfo ===null) return <ShimmerMenu/>;
    
    const {name,
         cuisines,
         costForTwoMessage 
        } =resInfo?.cards[2]?.card?.card?.info ;

    const {itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    // console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    const toggleAccordian = (index) =>{
        setShowIndex(showIndex === index ? null : index);
    }
   
    return (
        <div id="main">
            <h1 className="text-3xl flex justify-center items-center m-2 mt-2 p-1 text-bold bg-sky-300 rounded-lg">{name}</h1>
            <p className="border-2 bg-zinc-100 m-2 p-2 font-bold rounded-2xl text-center">
                {cuisines.join(", ")}-{costForTwoMessage} {'😍'}
            </p>
            {/* categories accordian */}
            {categories.map((category,index)=> (
            <RestaurantCategory 
            data = {category.card.card} 
            key={category.card.card.id}
            showItem = {index === showIndex ? true : false}
            setShowIndex = {()=> toggleAccordian(index)}
            dummy = { dummy }
            />
            ))}
        </div>
    )
}

export default RestaurantMenu;