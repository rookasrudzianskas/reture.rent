import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__leftNav">
                    <div className="header__logo">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt=""/>
                    </div>

                    <div className="header__nav">
                        <ul>
                            <li>Menu</li>
                            <li>Rewards</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                </div>

                <div className="header__rightNav">

                    <div className="header__findStore">
                        <LocationOnIcon className="header__locationIcon" />
                        <span>Find a store</span>
                    </div>

                    <div className="header__signIn">
                        Sign In
                    </div>

                    <div className="header__joinNow">
                        Join now
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;
