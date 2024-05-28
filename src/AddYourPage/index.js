import { faAdd } from "@fortawesome/free-solid-svg-icons"
import addImage from "../Images/Vector (3).png"
import "./index.css"


const AddYour =()=>(

    <div className="parentContainer">
        <div className="add-card">
        <div className="headingdiv">
        <img src={addImage} alt="people" className='headingImage'/>
        <p>Add Your Own</p>
        </div>
        <p >Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hot
        Find a class, school, playground, auditorium, studio, shop or an event venue.
        </p>
          <button className='connect-button add-button'>Add New</button>
        </div>
    </div>
)

export default AddYour