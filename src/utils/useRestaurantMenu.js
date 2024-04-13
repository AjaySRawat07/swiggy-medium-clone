import { useState,useEffect } from "react";
import { MENU_API } from "./constants";


export const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    
  async function fetchData(){
    try {
        const resp = await fetch(MENU_API + resId);
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await resp.json();
        // console.log(json);
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        }
    }
    return resInfo;
}