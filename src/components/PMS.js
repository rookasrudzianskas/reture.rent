import React from 'react';
import "./styles/PMS.css";
import {Link} from "react-router-dom";


const PMS = () => {
    return (
        <div className="PMS">
            <div className="PMS__margin">
            <div className="PMS__leftRight__section">
                <div className="PMS__image">
                    <div className="PMS__image__real">
                        <img src="/images/how-it-works-illustration.png" alt=""/>
                    </div>
                </div>
                <div className="PMS__text">
                    <p className="PMS__howItWorks">HOW IT WORKS</p>
                    <div className="smaller__width">
                        <h1 className="PMS__howToUnify">Unify your PMS and service provider partners</h1>
                    </div>

                    <div className="smaller__width">
                        <p className="PMS__description">Unify your PMS and service provider partners within a seamless tenant engagement platform, and wave goodbye to paper and email workflows.</p>
                    </div>
                    <h3>Join now to start earning Rewards.*</h3>

                    <Link style={{textDecoration: 'none'}}  to="/login">

                    <div className="cta">
                        Join now
                    </div>
                    </Link>
                </div>

            </div>
            </div>
        </div>
    );
};

export default PMS;
