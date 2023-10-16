import React from "react";

function CarbonCalculatorPage () {

    return(
        <>
        <div className="calculator-container">
            
            <div className="left-container">
                <h2>Calculate your carbon footprint</h2>
                <p>There are many things that can impact your footprint, but one factor <br/> that can be quite impactful is private transport. Let's take a look at your <br/> carbon footprint based on your mode of transportation.</p>
                
                <div className='form'>
                    <div className="row1">
                        <label>What is the engine size of your vehicle?</label>
                        <select>
                            <option>0.8L</option>
                            <option>1.0L</option>
                            <option>1.2L</option>
                            <option>1.4L</option>
                            <option>1.6L</option>
                            <option>1.8L</option>
                            <option>2.0L</option>
                            <option>2.2L</option>
                            <option>2.5L</option>
                            <option>3.0L</option>
                            <option>3.5L</option>
                            <option>4.0L</option>
                            <option>4.5L</option>
                            <option>5.0L</option>
                            <option>5.5L</option>
                            <option>6.0L</option>
                            <option>6.5L</option>
                        </select>

                        <label>What type of transmission does your vehicle have??</label>
                        <select>
                            <option>Automatic</option>
                            <option>Automated manual</option>
                            <option>Automatic with select shift</option>
                            <option>Manual</option>
                        </select>

                        <label>What is the fuel type your vehicle uses?</label>
                        <select>
                            <option>Regular Petrol</option>
                            <option>Premium Petrol</option>
                            <option>Diesel</option>
                            <option>Ethanol</option>
                            <option>Natural gas</option>
                        </select>
                    </div>
                    <div className="row2">
                        <label>How many cylinders does your vehicle's engine have?</label>
                        <select>
                            <option>1 cylinder</option>
                            <option>2 cylinder</option>
                            <option>3 cylinder</option>
                            <option>4 cylinder</option>
                            <option>5 cylinder</option>
                            <option>6 cylinder</option>
                            <option>8 cylinder</option>
                            <option>10 cylinder</option>
                            <option>12 cylinder</option>
                            <option>16 cylinder</option>
                        </select>

                        <label>How many gears does your vehicle have?</label>
                        <select>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>

                        <label>How many kilometers do you typically travel per week?</label>
                        <input className="range" type="range" min="1" max="500"></input>
                    </div>
                </div>
            <div className="right-container"></div>
            
        </div>
        <div className="calculator-footer-img"/></div>
        </>
    )
}

export default CarbonCalculatorPage;