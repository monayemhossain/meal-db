import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [searchValue, setSearchValue] = useState("");
  const [meals, setMeals] = useState([]);

  const handleMeals = (e) => {
    const searchText = e.target.value;
    setSearchValue(searchText);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchValue]);
  const inputStyle = {
    width: "200px",
    padding: "5px",
    margin: "20px 0px",
  };

  return (
    <div>
      <input onChange={handleMeals} type="text" placeholder="Search your food" style={inputStyle} />
    <Container>  
      <Row xs={1}  md={3} className="g-5 ">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal}></Meal>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default Meals;
