import React from 'react';
import './styles/HeaderDashboard.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";
import BannerClick from "./BannerClick";
//
const HeaderDashboard = () => {
    return (
        // Header component

        <div className="header2">

            {/* THe section left lohgo*/}
            <Link to="/">
                <img src="/images/logo.png" className="header2__icon" alt=""/>
            </Link>

            {/*endof logo*/}

            {/* the center section of header    */}

            <div className="header2__center">
                <input type="text"/>
                <Link to="/search_results">
                <SearchIcon />
                </Link>
            </div>

            {/* the end of center section of header */}

            {/* the section right   */}

            <div className="header2__right">
                <BannerClick className="button2"/>
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
