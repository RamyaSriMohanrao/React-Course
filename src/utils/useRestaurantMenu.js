import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
//we can create our own custom hook(This is our own custom hook(useRestaurantMenu))
//fetching the data
const useRestaurantMenu = (resId) => {
    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data)
    }



    return resInfo;
}

export default useRestaurantMenu;