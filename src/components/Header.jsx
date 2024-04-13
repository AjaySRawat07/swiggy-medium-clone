// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer
/*
   Food Delivery App
1-> Header
->Navbar
 ..Logo
 ..Home 
 ..Help
 ..location
 ..sign in
 ..cart
2-> Body
    ..search component
        -input text
        -search icon
    ..restraunt carts
        -restro img
        -restro name
        -Rating , dishes , delivery time
    ..promotion section
    ..
3-> Footer
    ..about us
    ..licence
    ..contact us
*/

import logo from "../assets/logo.svg"
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
// import UserContext from "../utils/UserContext";
import {useSelector } from "react-redux";


export const Header = ()=>{

     const [logBtn,setBtn] = useState("Log-In"); //react re-render everyTime Header When do dynamic stuff
     const onlineStatus = useOnlineStatus();
    // const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

     return(
    <div className=" border-black flex h-32 shadow-lg" id="header">        
            <div id="logo-container" className="ml-6">
            <img  id="logo" className="h-32 ml-8 p-2" src={logo} alt="Brand Logo"/>
            </div>
            <div id="navItems" className=" ml-14">
                <ul id="ul-list" className="text-lg font-bold  flex gap-28 ml-32 mt-12" >
                    <li> OnlineStatus {onlineStatus ? '✅' : '❌'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Help">Help</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/Cart">🛒({cartItems.length})</Link></li>
                    <button 
                    className="border-2 border-black bg-teal-50 p-1 rounded-md mb-2" onClick={()=>{ logBtn === "Log-In"? setBtn("Log-Out"):setBtn("Log-In")}
                    } >{logBtn}</button>
                    {/* <li className="mr-2">{loggedInUser}</li> */}
                </ul>
            </div>
    </div>
    )}


