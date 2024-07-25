import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const addProduct = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState("")


    const newItem = async () => {
        const response = await fetch(`/api/products`,
            {
                method: "POST",
                body: JSON.stringify({
                    imageUrl: image,
                    name: itemName,
                    price: parseFloat(price), 
                    description: desc,
                    categ_id: parseInt(category)
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )
        navigate("/menu");
    }


    return (
        <>
            <div className="newItem">
                <form onSubmit={()=>{newItem()}} className="newItemForm">
                    <input type="text" onChange={(e)=>{setImage(e.target.value)}} placeholder="Image URL" required/>
                    <input type="text" onChange={(e)=>{setItemName(e.target.value)}} placeholder="Item Name" required/>
                    <input type="text" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price" required/>
                    <input type="text" onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description"/>
                    <input type="text" onChange={(e)=>{setCategory(e.target.value)}} placeholder="Category id" required/>
                    <input type="submit"/>
                </form>

            </div>
        </>
    )
        
    

}

export default addProduct;