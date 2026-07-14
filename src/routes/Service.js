import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg"
import Footer from "../components/Footer"
import Trip from "../components/Trip";

function Service (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>

    )
}

export default Service;