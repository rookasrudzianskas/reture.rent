import React from 'react';
import HeaderDashboard from "../../../components/Header-Dashboard";
import SearchDates from "../../../components/SearchDates";
import Banner from "../../../components/Banner";
import YourTrips from "../../../components/YourTrips";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <HeaderDashboard />
            <Banner />
            <YourTrips />
        </div>
    );
};

export default Dashboard;
