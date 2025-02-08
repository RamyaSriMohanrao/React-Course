import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";
import Notification from "./Notification";

const CategoryList = ({ items }) => {
    const [showNotification, setShowNotification] = useState(null);
    
    const dispatch = useDispatch();

    const handleClick = (itemId, item) => {
        dispatch(addItem(item));  

        setShowNotification(itemId);

        setTimeout(() => {
            setShowNotification(null); // Hide after 2 seconds
        }, 2000);
        
    };


    return(
        <div>
            {items.map((item) => (
                
                <div 
                    data-testid = "foodItems"
                    key = {item?.card?.info?.id}
                    className="p-2 m-2 border-b-2 text-left flex">
                    
                    <div className="w-9/12">
                    <div className="py-2">
                        
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button 
                                id="addButton"
                                className="p-2 mx-12 rounded-lg bg-black text-white shadow-lg" 
                                onClick = {() => handleClick(item?.card?.info?.id, item)} >
                                Add +
                            </button>
                            {showNotification === item?.card?.info?.id && (
                                <div className="absolute left-full ml-2 px-3 py-1 bg-green-500 text-white rounded-lg shadow-md transition-opacity duration-500 whitespace-nowrap">
                                    Item added to the cart.
                                </div>
                            )}
                        </div>
                        <div>
                            <img src = {CDN_URL + item?.card?.info?.imageId} className="w-full" />
                        </div>
                       
                    </div>
                </div>
             
            ))}
            
        </div>
        
    );
};

export default CategoryList;