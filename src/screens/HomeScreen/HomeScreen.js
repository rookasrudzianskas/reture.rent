import React from 'react';
import Header from "../../components/Header";
import HomeShit from "../../components/HomeShit";
import BodyImage from "../../components/BodyImage";
import TrustedBy from "../../components/TrustedBy";
import PMS from "../../components/PMS";
import RentureApp from "../../components/RentureApp";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <Header />
            <HomeShit />
            <BodyImage />
            <TrustedBy />
            <PMS />
            <RentureApp />
        </div>
    );
};

export default HomeScreen;
