import React from 'react';
import Header from "../../components/Header";
import HomeShit from "../../components/HomeShit";
import BodyImage from "../../components/BodyImage";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <Header />
            <HomeShit />
            <BodyImage />
        </div>
    );
};

export default HomeScreen;
