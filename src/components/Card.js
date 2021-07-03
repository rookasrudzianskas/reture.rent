import React from "react";
import "./styles/Card.css";

const Card = ({ src, title, description, price}) => {
    return (
        <div className="something">
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
        </div>
    )
}

export default Card;
