import React from 'react';

const buttonDark = (text, href) => {
    return(
        <a
            href={href}
                className="rounded-md bg-garoo-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-garoo-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garoo-blue-600"
        >{text}</a>
    )
}

export default buttonDark