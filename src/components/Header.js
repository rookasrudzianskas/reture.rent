import React, {useEffect, useState} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./styles/Header.css";
import {Link} from "react-router-dom";

const Header = () => {


    const [show, handleShow] = useState(false);

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

    return (
        <div className={`header ${show && 'header__white'}`}>
            <div className="header__container">
                <div className="header__leftNav">
                    <div className="header__nav">
                        <ul>
                            <li>Why renture?</li>
                            <li>Products</li>
                            <li>About Us</li>
                        </ul>
                    </div>

                </div>

                <div className="header__center">
                    <div className="header__logo">
                        <img src="images/logo.png" alt=""/>
                    </div>
                </div>

                <div className="header__rightNav">


                    <Link style={{textDecoration: 'none'}}  to="/login">
                        <div className="header__signIn">
                            Join Now
                        </div>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to="/signup">
                    <div className="header__joinNow">
                        Book a Demo (Coming Soon)
                    </div>
                    </Link>



                </div>
            </div>
        </div>
    );
};

export default Header;
