
import { AccountCircle, Delete, Star } from "@mui/icons-material";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, Fade } from "@mui/material";
import RatingSystem from "../components/RatingSystem";


const SingleSushi = () => {
    const [sushi, setSushi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([])
    const [alertVisible, setAlertVisible] = useState(false)
    const [rating, setRating] = useState(0)
    const [content, setContent] = useState("")

    const data = useParams()
    const id = data.id;



    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    let userId;
    if(loggedInUser){
        userId = loggedInUser.id
    }else{
        userId = 0;
    }
    
    const admin = localStorage.getItem("admin")
    

    
    useEffect(()=>{
        const fetchSushi = async () => {
            const response = await fetch("/api/products/"+id);
            // console.log(response)
            const sushiData = await response.json();
            // console.log(sushiData);
            setSushi(sushiData);
            
            setIsLoading(false)
            getReviews();
            

        };
        fetchSushi();
    }, [])
    const getReviews = async () => {
        await fetch('/api/reviews/'+id)
          .then(res => res.json())
          .then(data => {
            setReviews(data);
          })
          .catch(err => alert(err))
          .finally(()=>{
              setIsLoading(false);
          })
    }

    
    const avgRating = () => {
        if(reviews.length > 0){
            let totalReviews = 0;
            for(let i = 0; i < reviews.length; i++){
                totalReviews = parseInt(reviews[i].rating) + totalReviews;
            }
            // console.log(totalReviews)
            const itemRatingAvg = totalReviews / reviews.length;
            return Math.round(itemRatingAvg*100)/100;
        }else{
            const itemRatingAvg = "-";
            return itemRatingAvg;
        }
    }
    

    const addToOrder = async (product) => {
        const response = await fetch(`/api/cart/1/${product}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        // console.log(response)
        setAlertVisible(true)
    }

    const createReview = async () => {
        const response = await fetch(`/api/reviews/add`,
            {
                method: "POST",
                body: JSON.stringify({
                    content: content,
                    rating: rating,
                    userId: 1,
                    productId: sushi.id
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )
        window.location.reload();
    }

    const deleteReview = async (id) => {
        const deleted = await fetch(`/api/reviews/delete/${id}`,
            {
                method: "DELETE"
            }
        )
        window.location.reload();
    }



    if(isLoading){
        return(
            <h1>Loading. . . </h1>
        )
    }
    console.log(reviews)
    console.log(userId)
    // console.log(sushi)
    // console.log(rating)
    // console.log(content)
    return (
        <>
            <div id="singleItemContainer">
                <div id="item">
                    <img src={sushi.imageUrl} id="singleItemImg"/>
                     
                    <div id="itemDetails">
                        <div>
                            <h1>{sushi.name}</h1>
                            <div id="singleRating">
                                <Star id="starIcon"/>
                                <p>{avgRating()}/5</p>
                            </div>
                        </div>
                        
                        <h2 id="itemDesc">{sushi.description}</h2>
                        <h2 id="itemDesc">Price: ${sushi.price}</h2>

                        <Fade in={alertVisible} timeout={{enter: 500, exit: 1000}} addEndListener={()=>{setTimeout(()=>{setAlertVisible(false)}, 1000);}}>
                            <Alert>Item Successfully Added To Cart!</Alert>
                        </Fade>
                
                        {loggedInUser?<button onClick={()=>addToOrder(sushi.id)} className="addToOrder">Add To Order</button>:<Link to={"/account"}><button className="addToOrder">Login to Add This</button></Link>}
                        
                    </div>
                        
                </div>
                <div id="itemReviewSection">
                    <div id="reviewForm">
                        <div id="ratingHolder">
                            <h2>How did you like it?</h2>
                            <RatingSystem rating={rating} setRating={setRating}/>
                        </div>
                        
                        <div id="form">
                            
                                <textarea className="rateContent" onChange={(e)=>setContent(e.target.value)} rows={8} cols={44} placeholder="It was amazing!"></textarea>
                                {loggedInUser?<button className="submitRating" onClick={()=>createReview()}>Submit</button>:<Link to={"/account"}><button className="submitRating">Login</button></Link>}
                           
                        </div>
                        

                        

                    </div>
                    <div id="itemReviews">
                        {reviews.length>0?<h2>Here's what others had to say!</h2>:<h2>Be the first to leave a review!</h2>}
                        {reviews.map((review)=>{
                            return(
                                <div className="eachReview" key={review.id}>
                                    <div className="topReview">
                                        <div className="reviewUser">
                                            <AccountCircle />
                                            <h3>{review.user.firstName} {review.user.lastName[0]}. says. . .</h3>
                                        </div>
                                        
                                        {!admin?userId==review.user.id?<div className="deleteReview" onClick={()=>{deleteReview(review.id)}}><Delete/></div>:<></>:<div className="deleteReview" onClick={()=>{deleteReview(review.id)}}><Delete/></div>}
                                    </div>
                                    <div className="reviewContent">
                                        <div><RatingSystem rating={review.rating}/></div>
                                        <p>"{review.content}"</p>
                                    </div>
                                    

                                </div>
                            )
                        })

                        }

                    </div>
                </div>
            </div>
        </>
    );
}
export default SingleSushi;