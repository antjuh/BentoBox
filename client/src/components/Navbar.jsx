import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import { AccountCircle, Menu, MenuBook, MenuOpen, RamenDining, ShoppingBasket } from "@mui/icons-material";




const NavBar = () => {


    return (
        <>
            <div className="outerNav">
            <div className="navbar">
                <Link to={"/"}>
                    <img src={logo} className="navLogo"/>
                </Link>
                <div className="navLinks">
                    <Link to={"/menu"}>
                        <p>Menu</p>
                        <RamenDining/>
                    </Link>
                    <Link to={"/cart"}>
                        <p>Cart</p>
                        <ShoppingBasket/>
                    </Link>
                    <Link to={"/account"}>
                        <p>Account</p>
                        <AccountCircle/>
                    </Link>
                    
                </div>
                
            </div>
            </div>
        </>
    )
}
export default NavBar;