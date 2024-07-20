import React from "react";
import { useEffect, useState } from "react";


const AllSushi = () => {
    const [sushis, setSushis] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredSushi, setFilteredSushi] = useState([]);

    
    useEffect(()=>{
        const fetchSushis = async () => {
            const response = await fetch("./api/products");
            // console.log(response)
            const sushiData = await response.json();
            console.log(sushiData);
            setSushis(sushiData);
            setIsLoading(false)
            getCategories();

        };
        fetchSushis();
    }, [])

    const getCategories = async () => {
        await fetch('./api/categories')
          .then(res => res.json())
          .then(data => {
            setCategories(data);
          })
          .catch(err => alert(err))
          .finally(()=>{
              setIsLoading(false);
          })
    }

    const addCategory = (category) => {
        if(!selectedCategories.includes(category)){
            setSelectedCategories(prev => ([...prev, category]))
        }
    }

    const removeCategory = (category) => {
        if(selectedCategories.includes(category)){
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const resetCategory = () => {
        setSelectedCategories([]);
    }

    useEffect(()=>{
        if(selectedCategories.length === 0){
            setFilteredSushi(sushis);
        }else{
            setFilteredSushi(sushis.filter((item)=>(selectedCategories.includes(item.category.name))))
        }

    },[selectedCategories, sushis])






    
    // if(isLoading){
    //     return(
    //         <h1>Loading . . .</h1>
    //     )
    // }
    console.log(sushis)
    console.log(categories)
    return (
        <>
            <div className="menuContent">
                <div className="categories">
                {
                    categories.map((category)=> {
                        return(
                            <div onClick={()=>{
                                if(selectedCategories.includes(category.name)){
                                    removeCategory(category.name);
                                }else{
                                    addCategory(category.name);
                                }
                            }} className="catButton" key={category.id}>
                                {category.name}
                            </div>
                        )   
                    })
                }
                <div onClick={()=>{resetCategory()}} className="catButton">
                All
                </div>
                
                </div>
                <div className="allProducts">
                {filteredSushi.map(item => {
                    return (
                        <div className="itemCard" key={item.id}>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </div>
                    
                    )
                })}
                </div>
            </div>
        </>
    );
};

export default AllSushi;