import React from "react"
import PropTypes from "prop-types"
import "./ServiceIcon.css"

const ServiceIcon = ({ image, title, text }) => {
    return (
        <div className='flex flex-col items-start gap-2 mb-8 mt-8'>
            <div className='overlay_serviceicon' >
                <img className='image_serviceicon' src={image} alt='service'/>
            </div>
            <h1 className='h-12 mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-m text-start'>{title}</h1>
            <p className='mt-2 text-m leading-6 text-gray-700 text-start'>{text}</p>
        </div>
    )
}

ServiceIcon.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    textcolor: PropTypes.string
}

export default ServiceIcon
