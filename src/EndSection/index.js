import Group from "../Images/Group 99 (1).png"
import "./index.css"

const EndSection =()=>(
    <div className="parentdiv">
        <div className="top-div">
            <h3 className="headtext">Your <span className="colorblue">Hobby</span>, 
            Your <span className="blueviolet">community</span></h3>
            <button className='comuunitybtn'>Connect</button>
            <img src={Group} alt="group" className="groupimage"/>
        </div>
    </div>
)


export default EndSection