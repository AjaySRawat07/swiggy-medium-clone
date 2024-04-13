import { CDN_REST } from "../utils/constants";
// import axios from "axios";
import {useState,useEffect, useContext} from "react";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// res-card items
const RestaurantCards = (props) =>{
    const { resData } = props;
    // console.log(resData)
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      sla,
    } = resData?.info;

    return(
     <div id="card" className=" h-full w-full border-white rounded-lg bg-orange-200  hover:border-black border-2 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer p-4">
        <img className="h-44 object-cover w-full" src={CDN_REST+cloudinaryImageId} alt="restaurant-img" />
        <h2 className="font-bold">{name}</h2>
        <h3>{avgRating}stars</h3>
        <h3>{sla.slaString} mins</h3>
        <h3>{cuisines?.join(", ")}</h3>
     </div>
    )
}

const Body = () =>{
  // Local State Variables - Super Powerful Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]); // normal array destructuring
  const [filterItem,setFilterItem] = useState([]);
  const [searchItem,setSearchItem] = useState('');
  // console.log(listOfRestaurant);
  
  useEffect(()=>{
      fetchData();    
},[]);
    
 const fetchData= async() =>{
  try{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3278298&lng=78.0325594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    // *optional chaining
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterItem(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }catch(error){
    console.log("error");
  }
}
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
      return(
          <h1 className="text-2xl m-4">Off! your internet connection is lost</h1>
      )
  }
  const {loggedInUser,setUserName} = useContext(UserContext);
  // console.log(loggedInUser);
    return listOfRestaurant.length=== 0 ? <Shimmer/> 
    :( 
    <div id="body">
      <div id="filter-div" className="flex justify-center gap-2 m-1">
      <div id="search-input" className="">
        <input type="text" id="searchBox" className="border-black border-2 rounded-md p-1.5 px-5" placeholder="Search here" value={searchItem} onChange={(e)=>{
          setSearchItem(e.target.value);
        }}/>
        <button className="border-black border-2 rounded-md bg-red-500 p-1 px-4 ml-2" onClick={
          ()=>{
            const filterData = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchItem.toLowerCase()));
            console.log(filterData);
            setFilterItem(filterData);
             }
        }
        >Search</button>
        </div>
        <button
      id="high-btn"
      className="border-black border-2 rounded-md bg-green-400 m-2 ml-22 p-1 "
      onClick={() => {
       const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating >= 4
           );
      console.log(filteredList);
      setFilterItem(filteredList);

      }}>Rating 4 stars & more
     </button>
     
     <button
      id="low-btn"
      className="border-black border-2 rounded-md bg-red-500 m-2 ml-8 p-1"
      onClick={() => {
       const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating < 4
           );
      console.log(filteredList);
      setFilterItem(filteredList);
      }}>Rating Less Than 4
     </button>

     
</div>

        <div id="res-container" className="flex flex-wrap justify-between items-center px-10 py-6 gap-12">
        {/* <RestrauntCards 
        name="Walk In Woods"
        cuisines="4.4 stars 33 mins"      ...worst way  
        add="Dharampur"
        /> */}
        {/* <RestrauntCards  resData = { resList[0]}/>
        <RestrauntCards  resData = { resList[1]}/> */}
        {/* now.. looping through resList */}

        {
          filterItem.map((restaurant)=>(
          <Link 
          className="flex-shrink-0 w-72 h-96 rounded-lg overflow-hidden"
          key={restaurant.info.id} 
          to={"/restaurants/"+ restaurant.info.id}>
            <RestaurantCards  resData = {restaurant} />
            </Link>
          ))}

        </div>
    </div>
    )}

export default Body;