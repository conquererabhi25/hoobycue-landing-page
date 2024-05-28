import NavBarPage from "../NavBar"
import BanerSection from "../BanerSection"
import Features from "../Features"
import AddYour from "../AddYourPage"
import Testimonial from "../Testimonial"
import EndSection from "../EndSection"
import Footer from "../Footer"
import "./index.css"


const HomeSection =()=>(


    <div className="homesection">
        <NavBarPage/>
        <BanerSection/>
        <Features/>
        <AddYour/>
        <Testimonial/>
        <EndSection/>
        <Footer/>
    </div>
)


export default HomeSection