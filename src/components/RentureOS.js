import React from 'react';
import "./styles/RentureOS.css";


const PMS = () => {
    return (
        <div className="RentureOS">
            <div className="RentureOS__margin">
            <div className="RentureOS__leftRight__section">
                <div className="RentureOS__image">
                    <div className="RentureOS__image__real">
                        <img src="/images/phone.png" alt=""/>
                    </div>
                </div>
                <div className="RentureOS__text">
                    <p className="RentureOS__howItWorks">Coming Soon Renture OS</p>
                    <div className="smaller__width">
                        <h1 className="RentureOS__howToUnify">Streamline
                            move-in, maximize engagement</h1>
                    </div>

                    <div className="smaller__width">
                        <p className="RentureOS__description">Add the RentureOS tenant engagement platform to your current workflow to eliminate admin, close deals faster and empower tenants to take ownership of their lettings experience.</p>
                    </div>
                    <ul className="smaller__widthandheight">
                        <li className="li__elements">Real-time reference status</li>
                        <li className="li__elements">Automated tenancy agreement creation</li>
                        <li className="li__elements">
                            Managed tenant services marketplace</li>
                        <li className="li__elements">A central hub for all communications (coming soon)</li>

                    </ul>

                </div>

            </div>
            </div>
        </div>
    );
};

export default PMS;
