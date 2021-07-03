import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutScreen from "../AboutScreen/AboutScreen";
import LoginScreen from "../LoginScreen/LoginScreen";
import SignUp from "../../components/SignUp";
import HomeScreen from "../HomeScreen/HomeScreen";
import Dashboard from "./Dashboard/Dashboard";

const LoggedInUserScreen = () => {
    return (
        <div className="LoggedInUserScreen">
                <Dashboard />
        </div>
    );
};

export default LoggedInUserScreen;
