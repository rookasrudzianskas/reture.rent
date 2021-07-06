import React from 'react';
import HeaderDashboard from "../../../components/Header-Dashboard";
import SearchDates from "../../../components/SearchDates";
import Banner from "../../../components/Banner";
import YourTrips from "../../../components/YourTrips";
import Footer from "../../../components/Footer";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <HeaderDashboard />
            {/*banner first does not work*/}
            {/*<First_Banner />*/}
            <Banner />
            <YourTrips />
            <Footer />
        </div>
    );
};

export default Dashboard;
