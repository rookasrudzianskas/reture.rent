import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header">
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

                    <div className="header__findStore">
                        <LocationOnIcon className="header__locationIcon" />
                        <span>Find partners</span>
                    </div>

                    <div className="header__signIn">
                        Join Now
                    </div>

                    <div className="header__joinNow">
                        Book a Demo
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;
