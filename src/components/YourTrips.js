import React from 'react';
import './styles/Home.css';
import Card from './Card'

// ES7 snippets to do 'rfce'

function YourTrips() {
    return (
        <div className='home'>

            {/* cards the first 3 rows to make the experiances  */}

            <h1>Let's forget work and go somewhere far away...</h1>
            <div className='home__section'>
                <Card
                    src="http://cdn.cnn.com/cnnnext/dam/assets/200924183413-dubai-9-1.jpg"
                    title="Dubai Experiences"
                    description="Unique activities in the heart of UAE, many people love, we believe you are going to love it as well!"
                />
                <Card
                    src="https://s31606.pcdn.co/wp-content/uploads/2020/06/iStock-1144242421-e1591402294411.jpg"
                    title="Las Vegas Experiences"
                    description="Spaces that are more than just a place to sleep. Let's restart the passion to explore the world."
                />
                <Card
                    src="https://img1.10bestmedia.com/Images/Photos/378847/GettyImages-1085317916_54_990x660.jpg"
                    title="Barcelona Experiences"
                    description="Always warm, friendly people, warm ocean, everything you could with for a unique stay."
                />

            </div>


            {/* end of cards the first 3 rows to make the experiances  */}

            {/* cards the first 3 rows to make the homes  */}


            <h1>Maybe something in your country for the weekend?</h1>

            <div className='home__section'>
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Vilnius"
                    description="Superhost with a stunning view of the old town in Sunny Vilnius"
                    price="£130/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in Kaunas"
                    description="Enjoy the amazing sights of Kaunas with this stunning penthouse"
                    price="£350/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby Trakai"
                    price="£70/night"
                />
            </div>

            {/* end of cards the first 3 rows to make the home listings  */}

        </div>
    )
}

export default YourTrips;
