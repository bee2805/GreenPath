import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {

    return(
        <div className="nav-container">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="name-container">
                        <p className="logo-text">Green</p>
                        <p className="logo-text green">Path</p>
                    </div>
                    
                </div>
                <div className="navItems">
                    <NavLink to="/"><p>Home</p></NavLink>
                    <NavLink to="/CarbonCalculator"><p>Carbon Emissions</p></NavLink>
                    <NavLink to="/GetInvolved"><p>Get Involved</p></NavLink>
                </div>
        </div>
    )
}

export default NavBar;