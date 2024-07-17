import background from "../assets/background.jpg"
import { Link } from "react-router-dom"
import arrow from "../assets/arrow.png"
import React, { useEffect, useState } from "react"
import { useRef } from "react"
import delivery from "../assets/delivery.webp"
import smartphone from "../assets/smartphone.webp"
import sushiPlatter from "../assets/sushiPlatter.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Icon } from "@mui/material"
import star from "../assets/starRating.png"


const Home = () => {
    const divRef = useRef();
    const topThree = useRef();
    const [topReviews, setTopReviews] = useState([]);

    useEffect(()=>{
        const fetchTopThree = async () => {
            const response = await fetch('./api/reviews/topThree');
            const result = await response.json();
            setTopReviews(result)
        }
       fetchTopThree(); 
    }, [])
    console.log(topReviews)


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
                <div className="spacer layer1"></div>
                <div id="popularItems" ref={divRef}>
                    <div id="aboutInfo">
                        <div className="infoCard">
                            <div className="imgBg">
                                <img src={sushiPlatter}/>
                            </div>
                            <div className="infoDetails">
                                <h2>Quality & Freshness</h2>
                                <p>We only use the most fresh, never frozen ingredients to ensure 
                                    the highest quality and consistency for our customers.</p>
                            </div>
                        </div>
                        <div className="infoCard">
                            <div className="imgBg">
                                <img src={delivery}/>
                            </div>
                            <div className="infoDetails">
                                <h2>Quick Delivery</h2>
                                <p>With our many locations and skilled chefs, you'll get your food
                                     in no time. Not to mention free delivery!</p>
                            </div>
                        </div>
                        <div className="infoCard">
                            <div className="imgBg">
                                <img src={smartphone}/>
                            </div>
                            <div className="infoDetails">
                                <h2>Deals & Offers</h2>
                                <p>Download our mobile app today and get access to dozens of curated deals. 
                                    Earn enough points and your next meal could be free!
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div id="butStatement">
                        <h2>But don't take our word for it!</h2>
                        <h3>Here's what people are saying about our food, right now!</h3>
                    </div>
                    <div id="toTopItems">
                        <button id="toTopThree" onClick={() => topThree.current.scrollIntoView({behavior: "smooth" , block: "center"})}>
                            <img id="arrowBtn" src={arrow}></img>
                        </button>
                    </div>
                </div>
                <div className="spacer layer2"></div>
                <div id="topThree" ref={topThree}>
                    <h2 className="introTop">Here's what people think!</h2>
                    {topReviews.map(review => {
                        return (
                            <div className="reviewCard" key={review.id}>
                                <div className="reviewItem">
                                    <div className="reviewImgHolder">
                                        <img className="reviewImg" src={review.product.imageUrl}/>
                                    </div>
                                    <h2>{review.product.name}</h2>
                                </div>
                              
                                <div className="reviewInfo">
                                    <p>"{review.content}"</p> <h2>- {review.user.firstName} {review.user.lastName.charAt(0)}.</h2>
                                </div>
                                <div className="ratingHolder">
                                    <img className="star" src={star}></img>
                                    <h2 className="rating">{review.rating}/5</h2>    
                                </div>                                
                                
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
export default Home;