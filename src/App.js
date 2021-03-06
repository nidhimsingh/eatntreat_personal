import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbotcomp";
import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import { Main as RestDetails } from "./components/RestrauntDetails/Main";
import { AuthProvider } from "./auth";

import { Container } from "@material-ui/core";
import Signup from "./components/Signup";


function App() {

  const [restaurants, setRestaurants] = useState([]);

  return (
    <div>
      <AuthProvider>
  <div style={{backgroundColor:"#FFFDD0"}}>
      <Router>
        <Navbar btn={<button>click me</button>} />
        <Chatbot />
        <Switch>
          <Route path="/" exact>
            <RestaurantList cbRestaurants={ setRestaurants } />
          </Route>
          <Route path="/restaurant/:id">
            <RestDetails data={ restaurants }/>
          </Route>
        </Switch>
        
          <Container>
            <Signup></Signup>
          </Container>
      </Router>    </div>
      </AuthProvider>
      
      </div>

  );
}
export default App;
