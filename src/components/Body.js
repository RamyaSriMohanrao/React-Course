import RestaurantCard, {withInfoLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () =>{
  
  const [ListOfRestaurants,setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("")

  const RestaurantCardUpdated = withInfoLabel(RestaurantCard);
  // console.log(ListOfRestaurants)

  useEffect(()=>{
   fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data?.json();

    // console.log(json);
    
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Check the internet connection..</h1>
    );
  
  const {loggedInUser, setUserName} = useContext(UserContext);
  
  return ListOfRestaurants.length === 0 ? ( <Shimmer/> ) : (
        <div className="body">
            <div className="filter flex">
              <div className = "search p-4 m-4">
                <input 
                  type = "text" 
                  data-testid = "searchInput"
                  className = "border border-solid border-black " 
                  value = {searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                 }}
                />

                <button className="px-4 my-2 bg bg-yellow-100 m-4 rounded-lg hover:scale-105 hover:bg-yellow-200"
                  onClick={() =>{
                  console.log(searchText);

                  const filteredRestaurants = ListOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                  setFilteredRestaurants(filteredRestaurants);

                } }
                > Search </button>
              </div>
              <div  className="search m-4 p-4 flex items-center">
                <button 
                  className="px-4 py-2 bg-amber-100 rounded-lg hover:scale-105 hover:bg-yellow-200" 
                  onClick={() => {
                    const filterList = ListOfRestaurants.filter((res)=>res.info.avgRating > 4.5);
                    console.log(filterList);
                    setFilteredRestaurants(filterList)
                  }}
                >Top Rated Restaurant</button>
              </div>
              {/* <div  className="search m-4 p-4 flex items-center">
                <label>UserName : </label>
                 <input 
                    className="border border-black" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                  />
              </div> */}
            </div>
            <div className="flex flex-wrap">
                {
                  filteredRestaurants?.map((restaurant) => (
                    <Link 
                      key = {restaurant?.info?.id}
                      to={"/restaurant/"+ restaurant?.info?.id }>
                      
                      {restaurant.info.availability.opened ? (
                        <RestaurantCardUpdated resData={restaurant}/>
                      ):(
                        <RestaurantCard  resData={restaurant}/>
                      )}
                    </Link>
                       
                  ))}
                
               
            
            </div>
            
        </div>
    ) 
}


export default Body;