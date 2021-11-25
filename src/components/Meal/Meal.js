import React from "react";
import "./Meal.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";

const Meal = (props) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = props.meal;
  const url = `/meal/${idMeal}`;
  //    handle meal details button
  const history = useHistory();
  const handleMealDetails = () => {
    history.push(url);
  };

  return (
    
          <Col>
          <Card style={{ width: "21rem", marginTop:"50px" }}>
              <Card.Img variant="top" src={ strMealThumb} />
        <Card.Body>
          <Card.Title>Name:{strMeal}</Card.Title>
          <Card.Text>
          Category:{strCategory}
                  </Card.Text>
                  <Link to={url}> <Button variant="success">Meal details</Button></Link><br/>
                  <Link to={url}>Meal Details</Link><br/>
                  <Button variant="warning" onClick={handleMealDetails} >Meal details-2</Button>{' '}
        </Card.Body>
      </Card>
          </Col>
  );
};

export default Meal;
