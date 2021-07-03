import React from 'react';
import "./styles/HomeShit.css";
import {Button} from "@material-ui/core";

const HomeShit = () => {
    return (
        <div className="homeShit">
            <div className="empty">
                <div className="empty__something">
                    <p>Digitize and accelerate lettings with our tenant engagement platform
                    </p>

                    <h3>Halo plugs into your property management system to drive fully-digital, transparent and friction-free tenant engagement, through the entire lettings lifecycle.</h3>
                </div>
            </div>
            <div className="banner">


                <div className="banner__info">
                    <h1>Get out and stretch your imagination</h1>

                    <h5>
                        Plan a different kind of getaway to uncover the hidden gems near you.
                    </h5>
                    <Button variant="outlined">Explore Nearby</Button>
                </div>
            </div>
        </div>
    );
};

export default HomeShit;
