import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/images/logo2.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Lorem ipsum dolor sit amet consectetur. Lacus urna consectetur nunc porttitor morbi. Tristique pellentesque id nec viverra.</p>
                <div className="flex mb-10 mt-10">
                    {/* Replace # with your social media links */}
                    <a href="#" className="footer-social">
                        <img src="/images/fb.svg" alt="Facebook" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/tw.svg" alt="Instagram" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/li.svg" alt="Twitter" />
                    </a>
                </div>
                <p className="footer-copyright">© 2023 Garoo Inc. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
