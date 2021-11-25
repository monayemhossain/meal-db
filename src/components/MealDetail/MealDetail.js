import { Button} from "react-bootstrap";
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./MealDetail.css"

const MealDetail = () => {
    const [mealDetail,setMealDetail]=useState({});
    const {id}= useParams();
    console.log(mealDetail)
  
    
    useEffect(()=>{
    
       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
       .then(res=>res.json())
       .then(data=>setMealDetail(data.meals[0]))
    },[id])

    return (
        <div className="mealDetail-container">
            <img src={mealDetail.strMealThumb} style={{width:"350px",height:"300px"}} alt="" />
            <h2> Meal Name: {mealDetail.strMeal}</h2>
            <h3>Category:{mealDetail.strCategory}</h3>
            <p> Meal Instruction:{mealDetail.strInstructions}</p>
            <Link to="/order">   <Button variant="success">Order Now</Button>{' '}</Link>
            
        </div>
    );
};

export default MealDetail;