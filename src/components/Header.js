// import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import logoImg from '../../img/—Pngtree—cartoon restaurant cooking delicious food_6939398.png';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log({loggedInUser});

    //subscribe to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)

    return(
        <div className="flex justify-between bg-pink-200 shadow-lg mt-1 sm:bg-green-200 lg:bg-amber-200">
            <div className = "logo-contaier">
                <img className = "w-28" src={require("../../img/—Pngtree—cartoon restaurant cooking delicious food_6939398.png")}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/Contact">Feedback</Link>
                    </li>
                    {/* <li className="px-4">
                        <Link to = "/Grocery">Grocery</Link>
                    </li> */}
                    <li className="px-4">
                        <Link to = "/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button 
                      className = "login"
                      onClick = {() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                      }}>
                        {btnNameReact}
                    </button>
                    {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;