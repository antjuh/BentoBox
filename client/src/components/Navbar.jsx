import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import { AccountCircle, RamenDining, ShoppingBasket } from "@mui/icons-material";




const NavBar = () => {


    return (
        <>
            <div className="outerNav">
            <div className="navbar">
                <Link to={"/"}>
                    <img src={logo} className="navLogo"/>
                </Link>
                <div className="navLinks">
                    <div className="navLink">
                        <Link to={"/menu"}>
                            <p>Menu</p>
                            <RamenDining className="navIcons"/>
                        </Link>
                    </div>
                    <div className="navLink">
                        <Link to={"/cart"}>
                            <p>Cart</p>
                            <ShoppingBasket className="navIcons"/>
                        </Link>
                    </div>
                    <div className="navLink">
                        <Link to={"/account"}>
                            <p>Account</p>
                            <AccountCircle className="navIcons"/>
                        </Link>
                    </div>
                    
                    
                </div>
                
            </div>
            </div>
        </>
    )
}
export default NavBar;