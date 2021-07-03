import React from 'react';
import SearchResult from "../../components/SearchResult";
import SearchPage from "../../components/SearchPage";
import "../../../src/components/styles/SearchResultScreen.css";
import Footer from "../../components/Footer";
import HeaderDashboard from "../../components/Header-Dashboard";

const SearchResultScreen = () => {
    return (
        <div className="backgroundColor">
            <HeaderDashboard />
            <SearchPage />
            <SearchResult />
            <Footer />
        </div>
    );
};

export default SearchResultScreen;
