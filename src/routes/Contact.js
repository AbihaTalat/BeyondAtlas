import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/johannes-plenio-hvrpOmuMrAI-unsplash.jpg"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm";


function Contact (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>

    )
}

export default Contact;