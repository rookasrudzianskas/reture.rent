import React from 'react';
import "./styles/RentureApp.css";
import {Link} from "react-router-dom";


const PMS = () => {
    return (
        <div className="PMS">
            <div className="PMS__margin">
            <div className="PMS__leftRight__section">
                <div className="PMS__image">
                    <div className="PMS__image__real">
                        <img src="/images/phoneapps.png" alt=""/>
                    </div>
                </div>
                <div className="PMS__text">
                    <p className="PMS__howItWorks">RENTURE APP</p>
                    <div className="smaller__width">
                        <h1 className="PMS__howToUnify">Friction-free
                            renting, at last.</h1>
                    </div>

                    <div className="smaller__width">
                        <p className="PMS__description">Take the hassle out of renting with the slick and intuitive mobile-friendly tools that tenants expect.</p>
                    </div>
                    <ul className="smaller__widthandheight">
                        <li className="li__elements">Apply in minutes</li>
                        <li className="li__elements">Track application status</li>
                        <li className="li__elements">Sign digitally</li>
                        <li className="li__elements">Pay securely online</li>
                        <li className="li__elements">Discover additional services</li>

                    </ul>

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
