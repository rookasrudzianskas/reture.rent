import React from 'react';
import HeaderDashboard from "../../../components/Header-Dashboard";
import SearchDates from "../../../components/SearchDates";
import Banner from "../../../components/Banner";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <HeaderDashboard />
            <Banner />
        </div>
    );
};

export default Dashboard;
