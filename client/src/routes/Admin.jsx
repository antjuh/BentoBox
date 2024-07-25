import { useState, useEffect } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";



const Admin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const adminLogin = async () => {
        localStorage.setItem("admin", 1)
    }

    const logout = async () => {
        localStorage.clear()
        navigate("/")
    }

    const admin = localStorage.getItem("admin")


    return (
        <>
            <div className="adminPage">
            <form className="adminLogin" onSubmit={()=>{adminLogin()}}>
                    <header>Admin Panel</header>

                    {admin?<button className="adminLogout" onClick={()=>{logout()}}>Logout</button>
                :<div>
                    <input type="text" placeholder="Username"  onChange={(e)=>{setUsername(e.target.value)}} required/>
                    <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}  required/>
                    <input type="submit"/>
                </div>
                    }
                </form>
                
                

            </div>
        </>
    )
}
export default Admin;