import React from 'react';
import "./styles/WhyRenture.css";
import {Link, useHistory} from "react-router-dom";


const WhyRenture = () => {

    const history = useHistory();

    const goHome = () => {
        history.push("/");
    }
    return (
        <div className="whyRenture">
            <div className="whyRenture__margin">
            <div className="whyRenture__leftRight__section">
                <div className="whyRenture__image">
                    <div className="whyRenture__image__real">
                        <img onClick={goHome} src="/images/how-it-works-illustration.png" alt=""/>
                    </div>
                </div>
                <div className="whyRenture__text">
                    <p className="whyRenture__howItWorks">Why Renture</p>
                    <div className="whyRenturesmaller__width">
                        <h1 className="whyRenture__howToUnify">The Renture tenant engagement platform
                        </h1>
                    </div>

                    <div className = "whyRenturesmaller__width">
                        <p className="whyRenture__description">Plug Renture into your current workflow to digitize and connect your communications, services and partnerships, creating a fully-digital and personalized tenant experience.</p>
                    </div>
                    <h3>Ready to digitize
                        your tenant experience?</h3>

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
