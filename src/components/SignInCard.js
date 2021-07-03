import React from 'react';
import "./styles/SigninCard.css";
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
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                username: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
            }))

            history.push("/logged-in/dashboard");
        })
    }

    const withConnexious = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                username: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
            }))

            history.push("/logged-in/dashboard");
        })
    }

    const withBrainlyemails = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                username: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
            }))

            history.push("/logged-in/dashboard");
        })
    }

    const withApple = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                username: result.user.displayName,
                userEmail: result.user.email,
                userPhoto: result.user.photoURL,
            }))

            history.push("/logged-in/dashboard");
        })
    }

    return (
        <div className="signinCard">
            <div className="signinCard__margin">
            <div className="signinCard__leftRight__section">
                <div className="signinCard__welcomingSide">
                    <div className="signinCard__image__real">
                        <img onClick={goHome} src="/images/logo.png" alt=""/>
                    <div className="welcsigninCard__renture">
                        <p className="welcsigninCard__renture__text">Welcome to Renture!</p>
                        <div className="">
                            <h1 className="welcsigninCard__renture__description">Your zero stress rental app</h1>
                        </div>
                    </div>
                    </div>
                </div>



                <div className="signinCard__text">
                    <p className="signinCard__howItWorks">RENTURE USER PORTAL</p>
                    <div className="smaller__width">
                        <h1 className="signinCard__howToUnify">Sign In With Socials</h1>
                    </div>

                    <div className="smaller__width">
                        <button class="signUpBTN" onClick={withGoogle}>Sign In With Google</button>
                        <button class="signUpBTN a1" onClick={withFacebook}>Sign In With Facebook</button>
                        <button class="signUpBTN a2" onClick={withConnexious}>Sign In With CONNEXIOUS</button>
                        <button class="signUpBTN a3" onClick={withBrainlyemails}>Sign In With Brainlyemails</button>
                        <button class="signUpBTN a4" onClick={withApple}>Sign In With Apple</button>

                    </div>
                    <h3>With email credentials already? <Link to="/loginpro" style={{textDecoration: "none"}}> Login!</Link></h3>
                    <h3>Not a user yet? <Link to="/signup" style={{textDecoration: "none"}}> Sign Up!</Link></h3>

                    <div className="cta">
                        Join now (coming soon)
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default SignUpCard;
