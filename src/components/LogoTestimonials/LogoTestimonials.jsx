import React,{useState,useEffect} from "react"

import "./LogoTestimonials.css"

const LogoTestimonials = () => {
    const testimonials = [
      {
        text: "“Garoo Inc is a great company to work with.”",
        src : "/images/testimonials/1.png",
      },
      {
        text: "“ They are very responsive and professional.”",
        src : "/images/testimonials/2.png",
      },
      {
        text: "“I am very happy with the results.”",
        src : "/images/testimonials/3.png",
      }
    ]

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="marquee-container">
          <div className="mx-auto mt-10 flex items-center md:gap-x-20 gap-x-10 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-5 marquee">
            {testimonials.map((testimonial) => (
                <a key={testimonial.src} className="flex items-center gap-2 mb-8 mt-8 min-w-xl md:items-center mx-10 md:mx-0">
                <p className="text-garoo-sky text-center  text-xl md:text-2xl font-bold tracking-tight w-full whitespace-nowrap">{testimonial.text}</p>
                <img
                    src={testimonial.src}
                    alt=""
                    className="col-span-2 object-contain lg:col-span-1 max-h-12 w-12 md:w-20 md:w-14"
                />
              </a>
                ))
            }
          </div>
          </div>
        </div>
      </div>
    )
  }

export default LogoTestimonials
  