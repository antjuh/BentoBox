import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";




const NavBar = () => {


    return (
        <>
            <div className="navbar">
                <Link to={"/"}>
                    <img src={logo} className="navLogo"/>
                </Link>
                <div className="navLinks">
                    <Link to={"/menu"}>
                        <p>Menu</p>
                    </Link>
                    <Link to={"/cart"}>
                        <p>Cart</p>
                    </Link>
                    <Link to={"/account"}>
                        <p>Account</p>
                    </Link>
                    
                </div>
                
            </div>
        </>
    )
}
export default NavBar;