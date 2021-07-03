import React from 'react';
import "./styles/LoginCard.css";
import {TextField} from "@material-ui/core";


const LoginCard = () => {
    return (
        <div className="loginCard">
            <div className="loginCard__margin">
            <div className="loginCard__leftRight__section">
                <div className="loginCard__welcomingSide">
                    <div className="loginCard__image__real">
                        <img src="/images/logo.png" alt=""/>
                    <div className="welcomingSide__renture">
                        <p className="welcomingSide__renture__text">Welcome to Renture!</p>
                        <div className="">
                            <h1 className="welcomingSide__renture__description">Your zero stress rental app</h1>
                        </div>
                    </div>
                    </div>
                </div>



                <div className="loginCard__text">
                    <p className="loginCard__howItWorks">RENTURE USER PORTAL</p>
                    <div className="smaller__width">
                        <h1 className="loginCard__howToUnify">Login</h1>
                    </div>

                    <div className="smaller__width">
                        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" />
                        <div className="textfield">
                            <TextField size="small"  id="outlined-basic" label="Password" variant="outlined" />
                        </div>
                    </div>
                    <h3>Not a user yet? Sign Up!</h3>

                    <div className="cta">
                        Join now
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default LoginCard;
