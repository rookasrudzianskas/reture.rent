import React from 'react';
import SearchResult from "../../components/SearchResult";
import SearchPage from "../../components/SearchPage";
import "../../../src/components/styles/SearchResultScreen.css";
import Footer from "../../components/Footer";

const SearchResultScreen = () => {
    return (
        <div className="backgroundColor">
            <SearchPage />
            <SearchResult />
            <Footer />
        </div>
    );
};

export default SearchResultScreen;
