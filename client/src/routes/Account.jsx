
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({})
    const [cart, setCart] = useState([]);

    const handleClick = (boolean) => {
        setActive(boolean)
    }


    const register = async () => {
        const newUser = await fetch("./api/users/register", {
            method: "POST",
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password
            
            }),
            headers: {
               "Content-Type": "application/json"
            },
        })
        const result = await newUser.json();
        
        getUser(result.token)
        // window.location.reload();
    }

    const login = async () => {
        const loginUser = await fetch("./api/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await loginUser.json();
        console.log(result.token)
       
        getUser(result.token)
    }

    const getUser = async (token) => {
        const user = await fetch("./api/users/me", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await user.json();
        // console.log(result)
        setUser(result)
        localStorage.setItem("user", JSON.stringify(result))
        
    }
    
    useEffect(()=>{
        const getCart = async (id) => {
            const response = await fetch(`/api/cart/${id}`)
            const data = await response.json();
            setCart(data);
        }
        getCart(1)
    },[])


   const logout = () => {
        localStorage.removeItem("user")
        
        navigate("/")
   }

   const userInfo = JSON.parse(localStorage.getItem("user"))

   console.log(userInfo)
   
   console.log(cart)

  
    return (
        <>
            {userInfo===null?
            <div className="registrationPage">
                <div className={active?"active wrapper":"wrapper"}>
                    <div className="rForm signup">
                    <header onClick={()=>{handleClick(false)}}>Signup</header>
                        <form action="#" onSubmit={()=>{register()}}>
                            <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} required/>
                            <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} required/>
                            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required/>
                            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                            <div className="checkbox">
                                <input type="checkbox" id="signupCheck"/>
                                <label for="signupCheck">I accept all terms & conditions</label>
                            </div>
                            <input type="submit" value="Signup"/>
                        </form>
                    </div>
                    <div className="rForm login">
                        <header onClick={()=>{handleClick(true)}}>Login</header>
                        <form action="#" onSubmit={()=>{login()}}>
                            <input type="text" placeholder="Userame" onChange={(e)=>setUsername(e.target.value)} required/>
                            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                            <a href="#">Forgot password?</a>
                            <input type="submit" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>:
            <div className="accountInfo">
                <h1>Welcome back, {userInfo.firstName} {userInfo.lastName[0]}. !</h1>
                <button onClick={()=>{logout()}} className="logoutBtn">Logout</button>
                <div id="currentOrder" onClick={()=>{navigate("/cart")}}>
                    <h2>Current Order:</h2>
                    
                    <div>
                    {cart.length > 0?
                        cart.map(order => {
                            return(
                                <div>
                                    <img src={order.product.imageUrl} className="currentOrderImg"/>
                                </div>
                            )
                        }):<div><h2>There are no items!</h2></div>
                    
                    
                    }
                    </div>
                </div>
            </div>
                
            }  
        </>
    )
}
export default Account;