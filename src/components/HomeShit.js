import React from 'react';
import "./styles/HomeShit.css";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const HomeShit = () => {
    return (
        <div className="homeShit">
            <div className="empty">
                <div className="empty__something">
                    <p>Simplify and accelerate your property renting process or book one by yourself!
                    </p>

                        <h3 className="empty__h3">Renture plugs into your property management system to drive fully-digital, transparent and friction-free tenant engagement, through the entire rental lifecycle.</h3>

                    <div className="empty__button">
                        <Link style={{textDecoration: 'none'}}  to="/login">

                        <div className="empty__joinNow">
                        Book a Demo
                             </div>
                        </Link>
                    </div>
                </div>

            </div>
            {/*<div className="banner">*/}


            {/*    <div className="banner__info">*/}
            {/*        <h1>Get out and stretch your imagination</h1>*/}

            {/*        <h5>*/}
            {/*            Plan a different kind of getaway to uncover the hidden gems near you.*/}
            {/*        </h5>*/}
            {/*        <Button variant="outlined">Explore Nearby</Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default HomeShit;
