import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);

    // console.log("Parent constructor")
    }

    componentDidMount(){
        // console.log("Parent didMount")
    }
    render(){
        // console.log("Parent rendered")
        return (
            <div>
                <h1 className="font-bold p-2 text-4xl">About Us</h1>
                {/* <div>
                    loggedIn User
                    <UserContext.Consumer>
                        {(loggedInUser) => {
                            console.log("loggedInUser:", loggedInUser); // Debug the value
                            return <h1>{loggedInUser.loggedInUser}</h1>;
                        }}
                    </UserContext.Consumer>
                </div> */}
                <div className="border border-yellow-500 p-3 mx-6 my-10 bg-yellow-100 ">
                    <h2 className="p-8 m-8 text-3xl italic">Welcome!! We’re here to transform the way you enjoy your favorite meals.</h2>
                    <h3 className="p-10 m-10 text-3xl italic"> <strong>Our mission is simple: </strong>To bring delicious, fresh, and quality food straight to your doorstep with just a few clicks.</h3>
                </div>
                
                {/* <UserClass name = {"First"} location = {"TVR"}/> */}
                
            </div>
        )
    }
    
}








// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Learning Something new</h2>
//             <UserClass name = {"Ramya (class)"} location = {"TVR"}/>
//         </div>
//     )
// }

export default About;