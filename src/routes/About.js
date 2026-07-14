import AboutUs from "../components/AboutUs"
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/luca-micheli-ruWkmt3nU58-unsplash.jpg"
import Footer from "../components/Footer"

function About (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>

    )
}

export default About;