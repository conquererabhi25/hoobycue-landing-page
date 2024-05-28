import SignInForm from "../SignUpPage"
import GroupImage from "../Images/Group 27.png"
import "./index.css"


const BanerSection =()=>(
    <div className="mainContainer">
        <div className="BanerSection">
            <h1 className="banerHeading">Explore your <span className="colorspan1">hobby</span> or <span className="colorspan2">passion</span></h1>
        <p className="para">
        Welcome to our community! By signing up, you'll gain access to exclusive content and personalized recommendations tailored just for you.
         Connect with like-minded individuals, share your interests, and expand your network.
          Enjoy seamless access to all our premium features and stay
          updated with the latest news and events. Your journey towards an enriched experience starts here.  <br/>Join us today and unlock the full potential of our platform. Your satisfaction and engagement are our top priorities, and we can't wait to have you onboard. Sign up now and be part of something amazing!
        </p>
         <img src={GroupImage}   alt="group" />  
        </div>
        <div>
            <SignInForm/>
        </div>
    </div>
)


export default BanerSection