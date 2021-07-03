import React from 'react';
import "./styles/WhyRenture.css";
import {Link} from "react-router-dom";


const WhyRenture = () => {
    return (
        <div className="whyRenture">
            <div className="whyRenture__margin">
            <div className="whyRenture__leftRight__section">
                <div className="whyRenture__image">
                    <div className="whyRenture__image__real">
                        <img src="/images/how-it-works-illustration.png" alt=""/>
                    </div>
                </div>
                <div className="whyRenture__text">
                    <p className="whyRenture__howItWorks">HOW IT WORKS</p>
                    <div className="whyRenturesmaller__width">
                        <h1 className="whyRenture__howToUnify">Unify your PMS and service provider partners</h1>
                    </div>

                    <div className = "whyRenturesmaller__width">
                        <p className="whyRenture__description">Unify your PMS and service provider partners within a seamless tenant engagement platform, and wave goodbye to paper and email workflows.</p>
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

export default WhyRenture;
