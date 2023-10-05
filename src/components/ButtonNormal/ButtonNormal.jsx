import React from 'react';
import { Link } from "react-scroll";

const buttonNormal = (text,href) => {
    return(
        
        <Link to={href} spy={true} smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">            
            {text}→
        </Link>
    )
}

export default buttonNormal