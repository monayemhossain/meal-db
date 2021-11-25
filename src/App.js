import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MealDetail from "./components/MealDetail/MealDetail";
import Meals from "./components/Meals/Meals";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
         <Switch>
          <Route path="/home">
           <Home/>
          </Route>
          <Route path="/about">
           <About/>
          </Route>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/meals">
           <Meals/>
          </Route>
          <Route path="/meal/:id">
            <MealDetail/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path ="*">
            <NotFound/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
