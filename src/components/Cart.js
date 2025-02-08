import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store?.cart?.items);

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
    <div className="text-center p-4 m-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="w-6/12 m-auto">
            <button 
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}>
                    Clear Cart
            </button>
            
            {cartItems.length === 0 ? (
                <h1>Cart is Empty!! Add Items to the Cart..</h1>
            ) : (
                <CategoryList 
                    items = {cartItems}/>
            )}
            
        </div>
    </div>
    )
};

export default Cart;



