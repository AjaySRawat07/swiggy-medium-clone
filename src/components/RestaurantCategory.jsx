// import { useState } from "react";
import { ItemList } from "./ItemList";


export const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) =>{
    //   console.log(data)
     function handleClick(){
        setShowIndex();
    }
    return(
        <div>
            {/* Accordian-Header */}
            <div className=" w-6/12 mx-auto my-4 p-2 bg-slate-100 rounded-xl text-lg ">
                
            
               <div className=" flex justify-between font-bold text-xl cursor-pointer"
               onClick={handleClick}>
                <span className="text-xl">{ data.title } ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordian-Body */}
            {showItem &&   <ItemList items ={data.itemCards} dummy= {dummy}/>}
            </div>
        </div>
    )}