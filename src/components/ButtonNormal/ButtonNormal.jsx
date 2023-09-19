import React from 'react';

const buttonNormal = (text,href) => {
    return(
        <a href={href} className="text-sm font-semibold leading-6 text-gray-900">
                {text} <span aria-hidden="true">→</span>
        </a>
    )
}

export default buttonNormal