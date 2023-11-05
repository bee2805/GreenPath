import React from "react";

function AverageEmissions() {

    return(
        <div className="bad-emissions-container">
            
            <div className="bad-emissions-info">
                <h2>Let's Make Your Ride Greener!</h2>
                <p>Ready to take a friendlier route? Check out these tips for a <strong>greener path</strong>.</p>
            </div>

            <div className="bad-emissions-row1">
                <div className="alternative-transportation">
                    <div className="driving-habits-img"></div>
                    <h2>Optimise Your Driving Habits:</h2>
                    <p>Practice smooth acceleration and braking.</p>
                    <p>Keep a steady speed and avoid unnecessary idling.</p>
                </div>

                <div className="tires">
                    <div className="tire-img"></div>
                    <h2>Upgrade to Fuel-Efficient Tires:</h2>
                    <p>Choose tires with lower rolling resistance for better fuel efficiency.</p>
                </div>

                <div className="public-transport">
                    <div className="public-transport-img"></div>
                    <h2>Consider Alternative Transportation:</h2>
                    <p>Explore options like carpooling, public transportation, or biking for shorter trips.</p>
                </div>
            </div>

            <div className="bad-emissions-row2">

                <div className="vehicle-maintenance">
                    <div className="vehicle-maintenance-img"></div>
                    <div className="card-info">
                        <h2>Regular Vehicle Maintenance:</h2>
                        <p>Ensure your vehicle is regularly serviced and well-maintained. Make sure to use the recommended grade of motor oil.</p>
                    </div>
                </div>

                <div className="remote-work">
                    <div className="remote-work-img"></div>
                    <div className="card-info">
                        <h2>Work From Home:</h2>
                        <p>If your office offers hybrid working, consider working from home for some of the days in a week.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AverageEmissions;