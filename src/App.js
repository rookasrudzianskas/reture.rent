import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignUpCard from "./components/SignUpCard";
import SignUp from "./components/SignUp";
import Dashboard from "./screens/LoggedInUserScreen/Dashboard/Dashboard";
import SignInCard from "./components/SignInCard";
import SignIn from "./components/SignIn";

function App() {





    return (
    <div className="app">
        <div class="container-fluid">
            <div class="background">
                <Router>
                    <Switch>

                        <Route path="/about">
                            <AboutScreen />
                        </Route>

                        <Route path="/login">
                            <SignIn />
                        </Route>

                        <Route path="/loginpro">
                            <LoginScreen />
                        </Route>

                        <Route path="/signup">
                            <SignUp />
                        </Route>

                        <Route path="/logged-in/dashboard">
                            <Dashboard />
                        </Route>

                        <Route path="/">
                            <HomeScreen />
                        </Route>

                    </Switch>



                </Router>

                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>


            </div>
        </div>


    </div>
  );
}

export default App;
