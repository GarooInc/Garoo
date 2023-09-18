import NavBar from "../../components/NavBar/NavBar"
import Home from "../../components/Home/Home";


const Principal = () => {
    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="home">
                <Home/>
            </section>
            <section id='/about' className="about">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            </section>
            <section id='/projects' className="projects">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            </section>
        </div>
        
    );
}

export default Principal;
