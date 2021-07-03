import React from 'react';
import "./styles/SignUpCard.css";
import {TextField} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {auth, provider} from "../firebase";
import {selectUserEmail, selectUserName, setActiveUser} from "../features/userSlice";
import {useDispatch, useSelector} from "react-redux";


const SignUpCard = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);


    const history = useHistory();
    const goHome = () => {
        history.push("/");

    }

    const withGoogle = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                username: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
            }))

            history.push("/logged-in/dashboard");
        })
    }

    const withFacebook = () => {

    }

    const withConnexious = () => {

    }

    const withBrainlyemails = () => {

    }

    const withApple = () => {

    }

    return (
        <div className="loginCard">
            <div className="loginCard__margin">
            <div className="loginCard__leftRight__section">
                <div className="loginCard__welcomingSide">
                    <div className="loginCard__image__real">
                        <img onClick={goHome} src="/images/logo.png" alt=""/>
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
                        <h1 className="loginCard__howToUnify">Sign Up With Socials</h1>
                    </div>

                    <div className="smaller__width">
                        <button class="signUpBTN" onClick={withGoogle}>Sign Up With Google</button>
                        <button class="signUpBTN a1" onClick={withFacebook}>Sign Up With Facebook</button>
                        <button class="signUpBTN a2" onClick={withConnexious}>Sign Up With CONNEXIOUS</button>
                        <button class="signUpBTN a3" onClick={withBrainlyemails}>Sign Up With Brainlyemails</button>
                        <button class="signUpBTN a4" onClick={withApple}>Sign Up With Apple</button>

                    </div>
                    <h3>A user already? <Link to="/login" style={{textDecoration: "none"}}> Login!</Link></h3>

                    <div className="cta">
                        Join now
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default SignUpCard;
