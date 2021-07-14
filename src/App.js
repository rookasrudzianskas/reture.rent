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
import SearchResultScreen from "./screens/SearchResultScreen/SearchResultScreen";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEmail, selectUserName, selectUserPhoto} from "./features/userSlice";
import WhyRenture from "./components/WhyRenture";
import ProudScreen from "./components/ProudScreen";
import WhyRentureScreen from "./components/WhyRentureScreen";

function App() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    console.log(userName);

    const userNameLowercased = (userName.replace(' ', '')).toLowerCase();
    console.log(userNameLowercased);



    return (
    <div className="app">
        <div className="container-fluid">
            <div className="background">
                <Router>
                    <Switch>

                        <Route path="/about">
                            <AboutScreen />
                        </Route>

                        <Route path="/developers/rokas_gabriel">
                            <ProudScreen />
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

                        <Route path="/whyRenture">
                            <WhyRentureScreen />
                        </Route>

                        <Route path="/search_results">
                            {userName ? (
                                <SearchResultScreen />
                                ) : (
                                    <SignIn />
                                ) }
                        </Route>

                        <Route path={`/logged-in/user/dashboard`}>
                            {userName ? (
                            <Dashboard />
                            ) : (
                                <SignIn />
                            )}
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

