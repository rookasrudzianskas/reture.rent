import React from 'react';
import Header from "../../components/Header";
import HomeShit from "../../components/HomeShit";
import BodyImage from "../../components/BodyImage";
import TrustedBy from "../../components/TrustedBy";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <Header />
            <HomeShit />
            <BodyImage />
            <TrustedBy />
        </div>
    );
};

export default HomeScreen;
