import React from 'react';
import "./styles/PMS.css";


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
                    <h1 className="PMS__howToUnify">Unify your PMS and service provider partners</h1>
                    <h3>Join now to start earning Rewards.*</h3>

                    <p className="PMS__description">Unify your PMS and service provider partners within a seamless tenant engagement platform, and wave goodbye to paper and email workflows.</p>

                    <div className="cta">
                        Join now
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default PMS;
