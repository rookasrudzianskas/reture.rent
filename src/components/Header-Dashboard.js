import React from 'react';
import './styles/HeaderDashboard.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";
import BannerClick from "./BannerClick";

const HeaderDashboard = () => {
    return (
        // Header component

        <div className="header">

            {/* THe section left lohgo*/}
            <Link to="/">
                <img src="/images/logo.png" className="header__icon" alt=""/>
            </Link>

            {/*endof logo*/}

            {/* the center section of header    */}

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            {/* the end of center section of header */}

            {/* the section right   */}

            <div className="header__right">
                <BannerClick className="button"/>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>





            {/*    the end of the section right     */}
        </div>
    );
};

export default HeaderDashboard;
