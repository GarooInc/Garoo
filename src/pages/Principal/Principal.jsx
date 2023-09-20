import NavBar from "../../components/NavBar/NavBar"
import Home from "../../components/Home/Home";
import LogoClouds from "../../components/logoClouds/logoClouds";
import './Principal.css';
import About from "../../components/About/About";
import ServiceIcon from "../../components/ServiceIcon/ServiceIcon";
import Tittle from "../../components/Tittle/Tittle";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";
import Stats from "../../components/Stats/Stats";


const Principal = () => {
    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="home">
                <Home/>
                <LogoClouds/>
            </section>
            <section id='/about' className="about">
                <About/>
            </section>
            <section id='/services' className="text-center">
            {Tittle('Service we provide')}
            <div className='md:flex grid grid-rows-3 grid-flow-col gap-4 mx-auto max-w-7xl px-6 lg:px-8'>
                    <ServiceIcon image="/images/img5.svg" title="Web Design" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img6.svg" title="UI/UX Design" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img7.svg" title="Branding" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img8.svg" title="Digital Marketing" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img9.svg" title="SEO" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img10.svg" title="Email Marketing" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                </div>
            </section>
            <section id='/portfolio' className="portfolio">
                <Portfolio/>
            </section>
            <section id='/contact' className="contact">
                <h1>Contact</h1>
            </section>
            <section id='footer' className="footer">
                <Footer />
            </section>
        </div>
        
    );
}

export default Principal;
