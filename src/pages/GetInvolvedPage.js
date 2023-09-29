import React from "react";
import ProjectCard from "../components/ProjectCard";

function GetInvolvedPage() {

    return(
        <div className="getInvolved-container">
            <div className="getInvolved-header">
                <div className="getInvolved-info">
                    <h1>Start Giving back</h1>
                    <p>Contributing to a sustainable planet and nurturing a more eco-conscious environment can manifest in various ways. If you're interested in engaging with sustainability initiatives, explore the following list of local projects you can join.</p>
                </div>
            </div>
            <div className="sustainability-projects-container">
                <div className="sustainability-projects-header">
                    <h1>Sustainability Projects</h1>
                    <select>
                        <option>All</option>
                        <option value="Gauteng">Gauteng</option>
                        <option value="Western Cape">Western Cape</option>
                        <option value="Eastern Cape">Eastern Cape</option>
                        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                        <option value="Mpumalanga">Mpumalanga</option>
                        <option value="Limpopo">Limpopo</option>
                        <option value="North West">North West</option>
                        <option value="Free State">Free State</option>
                        <option value="Northern Cape">Northern Cape</option>
                    </select>
                </div>
                <div className="list-of-projects">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
            <div className="footer-img"/>
        </div>
    )
}

export default GetInvolvedPage;