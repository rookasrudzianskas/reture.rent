import React from 'react';
import HeaderDashboard from "../../../components/Header-Dashboard";
import SearchDates from "../../../components/SearchDates";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <HeaderDashboard />
            <SearchDates />
        </div>
    );
};

export default Dashboard;
