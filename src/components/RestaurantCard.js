import { useContext, useState } from "react";
import {CDN_URL} from  "../utils/constants";
import UserContext from "../utils/UserContext";
import LimitedText from "./LimitedText";

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
        <div data-testid = "resCards" className="m-4 p-4 w-64 rounded-lg text-sm bg-gray-100 shadow-lg hover:scale-110 ">
            <img 
            className="rounded-lg h-60 w-72"
            alt="res-logo"
            src={CDN_URL+ resData?.info?.cloudinaryImageId}//...
            />
            <h3 
                className="font-bold py-2 text-lg">
                    <LimitedText name = {name} limit={2}/>
            </h3>
            
            {/* <h4 className="break-words">{cuisines?.join(",")}</h4> */}
            <h4>⭐ {avgRating} stars</h4>
            <h4>🧑‍🤝‍🧑 {costForTwo}</h4>
            <h4>⏱️ {sla?.slaString}</h4>
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