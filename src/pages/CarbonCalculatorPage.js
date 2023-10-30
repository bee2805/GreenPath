import React, { useState } from "react";
import axios from "axios";

function CarbonCalculatorPage () {

    const [engineSize, setEngineSize] = useState("")
    const [transmission, setTransmission] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [cylenderAmount, setCylenderAmount] = useState("")
    const [gearAmount, setGearAmount] = useState("")
    const [amountOfKm, setAmountOfKm] = useState(1)

    const getInputValues = async () => {
        try {
            const transmissionAbbreviations = {
                Automatic: "A",
                "Automated manual": "AM",
                "Automatic with select shift": "AS",
                "Continuously variable": "AV",
                Manual: "M",
            };

            const fuelTypeAbbreviations = {
                "Regular Petrol": "X",
                "Premium Petrol": "Z",
                Diesel: "D",
                Ethanol: "E",
                "Natural gas": "N",
            };

            const response = await axios.post("http://localhost:8000",{
                EngineSize_L: parseFloat(engineSize),
                Cylinders: parseInt(cylenderAmount),
                Transmission: transmissionAbbreviations[transmission] + gearAmount || "", // Use abbreviation or empty string if not found
                Fuel_Type: fuelTypeAbbreviations[fuelType],
                FuelConsumptionComb_L_per_100_km: 0.0,
            });

            console.log("Prediction:", response.data.prediction);

        } catch (error) {
          console.error("Error:", error);
        }
    };

    return(
        <>
        <div className="calculator-container">
            
            <div className="left-container">
                <h2>Calculate your carbon footprint</h2>
                <p>There are many things that can impact your footprint, but one factor that can be quite impactful is your personal vehicle. Let's take a look at your carbon footprint based on your mode of transportation.</p>
                
                <div className='form'>
                    <div className="row1">
                        <label>What is the engine size of your vehicle?</label>
                        <select value={engineSize} onChange={(e) => setEngineSize(e.target.value)}>
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
                        <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                            <option value="Automatic">Automatic</option>
                            <option value="Automated manual">Automated manual</option>
                            <option value="Automatic with select shift">Automatic with select shift</option>
                            <option value="Continuously variable">Continuously variable</option>
                            <option value="Manual">Manual</option>
                        </select>

                        <label>What is the fuel type your vehicle uses?</label>
                        <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                            <option>Regular Petrol</option>
                            <option>Premium Petrol</option>
                            <option>Diesel</option>
                            <option>Ethanol</option>
                            <option>Natural gas</option>
                        </select>

                        <button onClick={getInputValues}>Calculate</button>
                    </div>
                    <div className="row2">
                        <label>How many cylinders does your vehicle's engine have?</label>
                        <select value={cylenderAmount} onChange={(e) => setCylenderAmount(e.target.value)}>
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
                        <select value={gearAmount} onChange={(e) => setGearAmount(e.target.value)}>
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
                        <div className="range-input">
                            <input className="range" type="range" min="0" max="100" value={amountOfKm} onChange={(e) => setAmountOfKm(e.target.value)}></input>
                            <p>{amountOfKm} km</p>
                        </div>
                    </div>
                </div>
            <div className="right-container">
                <div className="vehicle-emissions-image"></div>
            </div>
            
        </div>
        <div className="calculator-footer-img"/></div>
        </>
    )
}

export default CarbonCalculatorPage;