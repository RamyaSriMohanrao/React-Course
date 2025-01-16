import { useContext } from "react";
import {CDN_URL} from  "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;

    // console.log(resData);

    const {loggedInUser} = useContext(UserContext)

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info || {} //..
    
    return(
        <div data-testid = "resCards" className="m-4 p-4 w-64 rounded-lg  bg-gray-100 hover:bg-yellow-200 shadow-lg hover:scale-110 ">
            <img 
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL+ resData?.info?.cloudinaryImageId}//...
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="break-words">{cuisines?.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            {/* <h4>User : {loggedInUser}</h4> */}
        </div>
    );
};


export const withInfoLabel = (RestaurantCard) => {
    return(props) =>{
        return(
            <div>
                <label className="absolute bg-amber-200 text-black m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



export default RestaurantCard;