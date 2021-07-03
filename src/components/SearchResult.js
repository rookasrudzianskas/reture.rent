import React from "react";
import "./styles/SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({img, location, title, description, star, price, total}) => {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchResult__heart" />


            {/* this is descriptions of cards */}

            <div className="searchResult__info">

                {/* the card top*/}

                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_______</p>
                    <p>{description}</p>
                </div>

                {/*the end of card top*/}

                <div className="searchResult__infoBottom">

                    {/* the start of car dbottom */}
                    <div className="searchResult__stars">

                        {/* the start and rating */}
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>

                        {/*     the end of rating*/}

                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                </div>

                {/*  the end of card bottom  */}

            </div>
        </div>
    )
}

export default SearchResult;
