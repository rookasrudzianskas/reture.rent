import React from 'react';
import Header from "../../components/Header";
import HomeShit from "../../components/HomeShit";
import BodyImage from "../../components/BodyImage";
import TrustedBy from "../../components/TrustedBy";
import PMS from "../../components/PMS";
import RentureApp from "../../components/RentureApp";
import RentureOS from "../../components/RentureOS";
import Home from "../../components/Home";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <Header />
            <HomeShit />
            <BodyImage />
            <TrustedBy />
            <PMS />
            <RentureApp />
            <RentureOS />
            <Home />
        </div>
    );
};

export default HomeScreen;
