import React from "react";
import "./styles/Card.css";
import {Link} from "react-router-dom";

const Card = ({ src, title, description, price}) => {
    return (
        <div className="something">
            <Link style={{textDecoration: 'none'}}  to="/login">

            <div className="card">
            <img src={src} alt=""/>
            <div className="card__info">

                {/* card info all */}
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>

                {/*    end of card one  */}

            </div>
        </div>
            </Link>
        </div>
    )
}

export default Card;
