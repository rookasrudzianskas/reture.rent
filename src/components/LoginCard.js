import React from 'react';
import "./styles/LoginCard.css";
import {TextField} from "@material-ui/core";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


const LoginCard = () => {


    const history = useHistory();
    const goHome = () => {
        history.push("/");

    }
    return (
        <div className="loginCard">
            <div className="loginCard__margin">
            <div className="loginCard__leftRight__section">
                <div className="loginCard__welcomingSide">
                    {/*<Link  style={{textDecoration: 'none'}}  to="/">*/}
                    <div className="loginCard__image__real">
                        <img onClick={goHome} src="/images/logo.png" alt=""/>
                    {/*</Link>*/}
                    <div className="welcomingSide__renture">
                        <p className="welcomingSide__renture__text">Welcome back to Renture!</p>
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

                    <div className="smaller__widths">
                        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" />
                        <div className="textfield">
                            <TextField size="small"  id="outlined-basic" label="Password" variant="outlined" />
                        </div>
                    </div>
                    <h3>Not a user yet? <Link to="/signup" style={{textDecoration: "none"}}> Sign Up!</Link></h3>

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
