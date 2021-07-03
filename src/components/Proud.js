import React from 'react';
import "./styles/Proud.css";
import {useHistory} from "react-router-dom";

const Proud = () => {

    const history = useHistory();

    const gobacHome = () => {
        history.push("/");
    }
    return (
        <div className="proud">
            <h1 className="h1Title">Built with love by Rokas And Gabriel ❤️</h1>
            <h2 className="h2Title">Australia ~ Silicon Valley in the USA ~ Lithuania</h2>

            <button onClick={gobacHome} className="goback">Go back to renture</button>
        </div>
    );
};

export default Proud;
