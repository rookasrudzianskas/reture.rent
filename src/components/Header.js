import React, {useEffect, useState} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./styles/Header.css";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEmail, selectUserName, selectUserPhoto, setUserLogOutState} from "../features/userSlice";
import {auth} from "../firebase";

const Header = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);


    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    const signOut = () => {
        // this is sign out
        auth.signOut().then(() => {
            dispatch(setUserLogOutState())
        }).catch((err) => alert(err.message));
    }

    const goRenture = () => {
        history.push("/whyRenture");
    }

    const gotoAboutUS = () => {
        history.push("/developers/rokas_gabriel");
    }

    return (
        <div className={`header ${show && 'header__white'}`}>
            <div className="header__container">
                <div className="header__leftNav">
                    {/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}
                    <div className="header__nav">
                        <ul>
                            <li onClick={goRenture}>Why renture?</li>
                            <li>Products</li>
                            <li onClick={gotoAboutUS}>About Us</li>
                        </ul>
                    </div>
                    {/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}

                </div>

                    {/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}
                <div className="header__center">
                    <div className="header__logo">
                        <img src="images/logo.png" alt=""/>
                    </div>
                </div>
                    {/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}



                    {/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}
                <div className="header__rightNav">

                    {userName && (
                    <Link style={{textDecoration: 'none'}}  to="/logged-in/user/dashboard">
                        <div className="header__signIn">
                            Go to your dashboard
                        </div>
                    </Link>

                    )}


                    {!userName && (
                    <Link style={{textDecoration: 'none'}}  to="/login">
                        <div className="header__signIn">
                            Join Now
                        </div>
                    </Link>
                    )}


                    {!userName && (

                        <Link style={{textDecoration: 'none'}} to="/signup">
                    <div className="header__joinNow">
                        Book a Demo (Coming Soon)
                    </div>
                    </Link>

                    )}

                    {userName && (

                        <Link style={{textDecoration: 'none'}} to="/login">
                            <div onClick={signOut} className="header__joinNow">
                                Sign Out
                            </div>
                        </Link>

                    )}



                </div>
                    {/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/}
            </div>
        </div>
    );
};

export default Header;
