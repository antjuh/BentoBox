import React from "react";
import { useEffect, useState } from "react";

const AllSushi = () => {
    const [sushis, setSushis] = useState([]);

    useEffect(() => {
        const fetchSushis = async () => {
                const response = await fetch("./api/products");
                // console.log(response)
                const sushiData = await response.json();
                console.log(sushiData);
                setSushis(sushiData);

        };
        fetchSushis(); 
    }, []);
    
    console.log(sushis)
    return (
        <>
        <div className="allProducts">
        {sushis.map(item => {
            return (
                <div className="itemCard">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            
            )
        })}
        </div>
        </>
    );
};

export default AllSushi;