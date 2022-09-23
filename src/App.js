import react from "react";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";



export default function App (){
    return (
        <div>
            <Home />
            <Feature />
            <Services />
            <Testimonials/>
            <Footer />


        </div>
        
    )

}