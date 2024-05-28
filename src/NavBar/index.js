import React from "react";
import AppLogo from "../Images/Logo.png"
import ExploreImg from "../Images/explore.png"
import HobbyImg  from "../Images/Hobbies.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "react-bootstrap";
import { faBell, faBookBookmark, faBookmark, faCaretDown, faHamburger, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './index.css'



const NavBarPage=()=>(
    <div className="navbarContainer">
        <div className="">
            <img src={AppLogo} alt="logo" className="logoImage"/>
        </div>
        <div className="searchBarContainer">
            <input type="search" className="SearchBar" placeholder="Search here..."/>
            <button type="button" className="searchButton">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
        <ul className="navbarUl">
            <li className="liststyling">
            <img src={ExploreImg} alt="explore" className="navimages"/>
                <p className="textStyle">Explore</p>
                <FontAwesomeIcon icon={faCaretDown} className="icondropdown"/>
            </li>
            <li className="liststyling">
            <img src={HobbyImg} alt="explore" className="navimages"/>
                <p className="textStyle">Hobbies</p>
                <FontAwesomeIcon icon={faCaretDown} className="icondropdown"/>
            </li>
            <li className="liststyling">
                <FontAwesomeIcon icon={faBell} className="icondropdown" color="#8064a2"/>
            </li>
            <li className="liststyling">
                <FontAwesomeIcon icon={faBookmark} className="icondropdown" color="#8064a2"/>
            </li>
            <li className="liststyling">
                <FontAwesomeIcon icon={faShoppingCart} className="icondropdown" color="#8064a2"/>
            </li>
            <li >
            <Button variant="outline-secondary">Sign In</Button>{' '}
            </li>
        </ul>

        {/* Small Screen UL */}

        <ul className="smallNavbar">
            <li className="smallavList">
                <FontAwesomeIcon icon={faSearch} color="blueviolet" className="navicons"/>
            </li>
            <li className="smallavList">
                <FontAwesomeIcon icon={faBell} color="blueviolet" className="navicons"/>
            </li>
            <li className="smallavList">
                <FontAwesomeIcon icon={faHamburger} color="blueviolet" className="navicons"/>
            </li>
        </ul>
    </div>
)
export default NavBarPage;