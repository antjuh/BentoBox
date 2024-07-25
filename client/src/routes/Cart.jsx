import { Add, Remove, Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
    const isLoggedIn = localStorage.getItem("user")

    const [cart, setCart] = useState([]);

    //TEMPORARY ORDER NUMBER BEFORE I GET USER WORKING
    const orderId = 1;

    useEffect(()=>{
        const getCart = async (id) => {
            const response = await fetch(`/api/cart/${id}`)
            const data = await response.json();
            setCart(data);
        }
        getCart(1)
    },[])

    const addToOrder = async (id) => {
        const response = await fetch(`/api/cart/${orderId}/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        window.location.reload();

    }

    const removeFromOrder = async (id) => {
        const response = await fetch(`/api/cart/${orderId}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        window.location.reload();

    }

    const removeAll = async (id) => {
        const response = await fetch(`/api/cart/${orderId}/${id}/deleteAll`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        window.location.reload();

    }

    const totalPrice = () => {
        let cartTotal = 0;
        if(cart.length>0){
            for(let i = 0; i < cart.length; i++){
                const itemPrice = cart[i].quantity * cart[i].product.price;
                cartTotal = cartTotal + itemPrice;
            }
            return cartTotal;
        }else{
            return 0;
        }
    }

    const subTotal = (Math.round(totalPrice() * 100) / 100).toFixed(2);
    const taxes = (Math.round(totalPrice()*6)/100).toFixed(2);
    const total = (Math.round((parseFloat(subTotal) + parseFloat(taxes))*100) / 100).toFixed(2);



    console.log(cart)
    return (
        <>
            <div id="cartPage">
                <div id="cartCont">
                {isLoggedIn?
                    <div id="cart">
                    {cart.length>0?<h2>This order ({cart.length} items) :</h2>:<h2>There are no items in your cart!</h2>}
                        
                        {
                            cart.map((item)=>{
                                return(
                                    <div className="cartItem">
                                        <div className="cartItemDetails">
                                            <img src={item.product.imageUrl} className="cartItemImage"/>
                                            <div className="cartItemDesc">
                                                <h3>{item.product.name}</h3>
                                                {item.product.description?<p>{item.product.description}</p>:<p>Uh oh, this item has no description!</p>}
                                            </div>
                                        </div>
                                        
                                        <div className="cartItemQuant">
                                            <button className="adjustQuantity" onClick={()=>{removeFromOrder(item.product.id)}}><Remove/></button>
                                            <h3>{item.quantity}</h3>
                                            <button className="adjustQuantity"  onClick={()=>{addToOrder(item.product.id)}}><Add/></button>
                                        </div>
                                        <h2>${item.product.price}</h2>

                                        <div className="deleteItem" onClick={()=>{removeAll(item.product.id)}}>
                                        <Delete/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                    </div>
                    :<div id="cart"><h2>You must be logged in to order!</h2></div>}
                </div>
                <div id="orderReviewCont">

                    {isLoggedIn?<div id="orderReview">
                        <h2>Order Total:</h2>
                        {cart.map((item)=>{
                            return(
                                <div className="itemTotal">
                                    <h2>{item.product.name}</h2>
                                    <h2>x{item.quantity}</h2>
                                    <h2>${item.quantity*item.product.price}</h2>
                                    
                                </div>
                            )
                        })}

                        <div className="totaling">
                            <h2>Subtotal  ${subTotal}</h2>
                            <h2>Tax ${taxes}</h2>
                            <h2>Total ${total}</h2>
                        </div>
                       
                        <Link to={"/checkout"}><button id="checkoutBtn">Checkout</button></Link>
                    </div>:<div id="orderReview"><h2>There is no order.</h2></div>}
                </div>

            </div>
        </>
    )
}
export default Cart;