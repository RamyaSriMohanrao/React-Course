import React from 'react';
import { useState } from 'react';

const LimitedText = ({name, limit}) => {
    const [showText, setshowText] = useState(false);
    const words = name.split(" ");
    const wrapText =words.length > limit ? words.slice(0,limit).join(" ") + "..." : name;
    
    return <p   onMouseEnter={() => setshowText(true)}
                onMouseLeave={() => setshowText(false)}
                className="cursor-pointer"
            >
                {showText ? name : wrapText}
            </p>;
}

export default LimitedText;