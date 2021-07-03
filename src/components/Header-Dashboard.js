import React from 'react';
import './styles/HeaderDashboard.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";
import BannerClick from "./BannerClick";
import {selectUserEmail, selectUserName, selectUserPhoto} from "../features/userSlice";
import {useDispatch, useSelector} from "react-redux";
//
const HeaderDashboard = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

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
                <input type="text" placeholder="Search for the unique stays in unique locations..."/>
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
                <Avatar src={userPhoto ? userPhoto : "https://cdn5.vectorstock.com/i/1000x1000/56/69/portrait-young-man-character-smiling-person-vector-18725669.jpg"} />
            </div>





            {/*    the end of the section right     */}
        </div>
    );
};

export default HeaderDashboard;
