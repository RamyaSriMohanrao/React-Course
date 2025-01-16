import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryList = ({items}) => {
    // console.log(items)
    const dispatch = useDispatch();


    const handleAddItem = (item) => {
        dispatch(addItem(item));  // Redux take this as a second argument and it will create a object like{Payload:"Pizza"}, it will take this object a nd pass it as 2nd arg in cartslice(addItem()) 
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
                                onClick = {() => handleAddItem(item)}>
                                Add +
                            </button>
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