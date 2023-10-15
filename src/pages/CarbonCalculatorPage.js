import React from "react";
import FirstStep from "../components/FormSteps/FirstStep";

function CarbonCalculatorPage () {

    return(
        <>
        <div className="calculator-container">
            
            <div className="left-container">
                <FirstStep/>
            </div>
            <div className="right-container"></div>
            
        </div>
        <div className="footer-img"/>
        </>
    )
}

export default CarbonCalculatorPage;