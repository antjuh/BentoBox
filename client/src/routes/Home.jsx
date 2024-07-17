import background from "../assets/background.jpg"
import { Link } from "react-router-dom"
import arrow from "../assets/arrow.png"
import React from "react"
import { useRef } from "react"


const Home = () => {
    const divRef = useRef();


    return (
        <>
            <div className="homePage">
                <div className="intro">
                    <div className="title">
                        <h1 id="titleText">Welcome to Bento Box</h1>
                        <h2 id="hookQuote">Get the quality and freshness of real Japanese quisine, right here.</h2>
                        <Link to={"/menu"}>
                            <button id="homeOrderBtn">ORDER NOW</button>
                        </Link>
                    </div>
                    <div className="imgHolder">
                        <img className="backgroundImg" src={background}></img>
                    </div>
                </div>
                <div>
                    <h2 id="why">Why us?</h2>
                    <button id="whyBtn" onClick={() => divRef.current.scrollIntoView({behavior: "smooth" , block: "center"})}><img id="arrowBtn" src={arrow}></img></button>
                </div>
                <div className="spacer layer1" ></div>
                <div id="popularItems" ref={divRef}>
                    <h1>Hello</h1>

                </div>
                <div className="spacer layer2"></div>

            </div>
        </>
    )
}
export default Home;