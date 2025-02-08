import { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState("");

    const handleFeedbackSubmit = () => {
        
        setMessage("Your feedback has been submitted successfully 😊.");
    };
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl p-4 m-4">Feedback </h1>
            <form>
                <input className="border border-black p-2 m-2" type="text" placeholder="Name"/><br/><br/>
                <input className="border border-black p-2 m-2" type="text" placeholder="Message"/><br/><br/>
                <button 
                    className="border border-black p-2 m-2 bg-amber-50 rounded-lg hover:scale-105 hover:bg-yellow-200" 
                    type="button"
                    onClick={handleFeedbackSubmit}>
                        Submit
                </button>

                {message && <h2 className=" text-yellow-500 font-bold text-lg p-2">{message}</h2>}
            </form>

            
        </div>
    );

};
export default Contact;