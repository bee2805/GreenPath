import React from "react";

function BadEmissions() {

    return(
        <div className="bad-emissions-container">
            
            <div className="bad-emissions-info">
                <h2>Let's Make Your Ride Greener!</h2>
                <p>Ready to take a friendlier route? Check out these tips for a <strong>greener path</strong>.</p>
            </div>

            <div className="bad-emissions-row1">
                <div className="eco-vehicle">
                    <div className="eco-vehicle-img"></div>
                    <h2>Explore Eco-Friendly Vehicles:</h2>
                    <p>Consider switching to a hybrid or electric vehicle for lower emissions.</p>
                </div>
                <div className="public-transport">
                    <div className="public-transport-img"></div>
                    <h2>Consider Alternative Transportation:</h2>
                    <p>Explore options like carpooling, public transportation, or biking for shorter trips.</p>
                </div>

                <div className="fuel-option">
                    <div className="fuel-option-img"></div>
                    <h2>Evaluate Fuel Choices:</h2>
                    <p>If possible, choose cleaner fuel options with lower environmental impact.</p>
                </div>
            </div>

            <div className="bad-emissions-row2">

                <div className="route-planning">
                    <div className="route-planning-img"></div>
                    <div className="card-info">
                        <h2>Smart Route Planning:</h2>
                        <p>Combine errands into one trip and use navigation apps to find the shortest and least congested routes.</p>
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

export default BadEmissions;