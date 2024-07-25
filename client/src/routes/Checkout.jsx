import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Checkout = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getCart = async (id) => {
            const response = await fetch(`/api/cart/${id}`)
            const data = await response.json();
            setCart(data);
        }
        getCart(1)
    },[])


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


    const removeAll = async (id) => {
        const response = await fetch(`/api/cart/1/${id}/deleteAll`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }


    const submitOrder = async () => {
        for(let i=0; i<cart.length; i++){
            removeAll(cart[i].productId)
        }

        window.location.reload()

          
    }


    return (
        <>
            {cart.length>0?<div className="checkoutWrapper">
                <div id="cartCont">
                    <div id="cart">
                        <form className="paymentForm" onSubmit={()=>{submitOrder()}}>
                            <h2>Card Information</h2>
                        <div id="cardInfo">
                            
                            <input placeholder="Card Number"/>
                            <input placeholder="Cardholder Name"/>
                            <input type="password" placeholder="CVV"/>
                            <input placeholder="Exp. Date"/>
                        </div>
                        <h2>Billing Information</h2>
                        <div id="billingInfo">
                            <input placeholder="Full Name"/>
                            <input placeholder="Street Address"/>
                            <input placeholder="Zip Code"/>
                            <input placeholder="State"/>
                        </div>
                        <input type="submit" value="Place Order"/>
                        </form>

                    </div>
                    
                </div>
                    <div id="orderReviewCont">
                    <div id="orderReview">
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
                       
                    </div>
                    </div>
                    
                
            </div>:<div id="checkoutConfirm">
                <div><h1>Order has been placed!</h1></div><h2>Click <Link to={"/"}>here</Link> to return to the home page!</h2></div>}
        
        </>
    )
}
export default Checkout;