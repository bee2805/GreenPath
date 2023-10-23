import React from "react";
import ProjectCard from "../components/ProjectCard";

function GetInvolvedPage() {

    return(
        <div className="getInvolved-container">
            
            <div className="getInvolved-header">
                <div className="getInvolved-info">
                    <h1>Start Giving back!</h1>
                    <p>Contributing to a sustainable planet and nurturing a more eco-conscious environment can manifest in various ways. If you're interested in engaging with sustainability initiatives, explore the following list of local projects you can join.</p>
                </div>
            </div>

            <div className="sustainability-projects-container">
                <h1>Sustainability Projects</h1>
                <div className="list-of-projects">
                    <a href="https://www.volunteerworld.com/en/volunteer-program/wildlife-reserve-supporter-in-south-africa-sidbury">
                        <ProjectCard ProjectImage="wildlife_reserve" ProjectName="Wildlife Reserve" ProjectDescription="PMGY’s Big 5 Wildlife Experience is a life-changing experience that allows you to work behind the scenes on a world-class wildlife reserve in South Africa! It is the ultimate wildlife programme, where volunteers get the opportunity to enjoy hands-on involvement and a rich education in Conservation Management."/>
                    </a>
                    <a href="https://www.volunteerworld.com/en/volunteer-program/rhino-poaching-awareness-in-south-africa-karongwe-reserve">
                        <ProjectCard ProjectImage="rhino_poaching" ProjectName="Poaching Awareness" ProjectDescription="This fabulous South African Game Reserve is situated on the Eastern Cape and spans over 6000 hectares. This experience aims to give volunteers a holistic experience of life on a game reserve with exposure not only to the majestic Big 5 family but also conservation of all types of fauna and flora – they all go hand in hand."/>
                    </a>
                    <a href="https://www.goodhopevolunteers.com/nc/volunteer-projects/detail/name/a/b/ocean-conservation/">
                        <ProjectCard ProjectImage="ocean_conservation" ProjectName="Ocean Conservation" ProjectDescription="This foundation is dedicated to the conservation of the marine environment in South Africa through research, willingness to help, and dedication. You can make a real change for the future of South Africa’s beautiful coastline and at the same time enjoy seeing whales, dolphins, seals and seabirds in their natural habitat."/>
                    </a>
                    <a href="https://africanimpact.com/volunteer-projects/environmental-sustainability/reforestation-environmental-education-volunteer/">
                        <ProjectCard ProjectImage="reforestation_project" ProjectName="Reforestation Projet" ProjectDescription="Volunteer in Kenya and share your passion for reforestation and evvironmental sustainability with the people of Limuru, a rural town in Kenya's highlands. Visit primary and secondary schools to encourage sustainable practices and support the conservation of indigenous forests by removing alien species."/>
                    </a>
                    <a href="https://africanimpact.com/volunteer-projects/environmental-sustainability/reforestation-environmental-education-volunteer/">
                        <ProjectCard ProjectImage="waste_reduction" ProjectName="Waste Reduction" ProjectDescription="This project is a world-first that has won awards for innovation and excellence – it is ideal for people who are passionate about the environment. Contribute to environmental conservation through sustainable building using EcoBricks, upcycling initiatives, direct clean-up action, and awareness workshops in in Zambia"/>
                    </a>
                    <a href="https://www.workingabroad.com/projects/volunteer-leatherback-sea-turtles-caribbean/">
                        <ProjectCard ProjectImage="sea_turtles" ProjectName="Sea Turtles" ProjectDescription="Sea turtle conservation is an incredibly important part of our efforts to protect our oceans. This project allows research assistant volunteers to gain hands-on experience with the world’s largest sea turtles and to contribute to ocean conservation in Grenada. Take part in activities with these beautiful creatures."/>
                    </a>
                    <a href="https://www.workingabroad.com/projects/maldives-island-volunteer-project/">
                        <ProjectCard ProjectImage="maldieves_island" ProjectName="Maldives Island" ProjectDescription="The volunteer project is based on Naifaru, an Island in the Maldives. This programme aims to improve life for the local inhabitants and wildlife. Volunteers help protect and rehabilitate endangered sea turtle populations, conserve and repair local coral reefs, conduct marine life surveys & support community awareness programmes."/>
                    </a>
                    <a href="https://www.workingabroad.com/projects/maldives-island-volunteer-project/">
                        <ProjectCard ProjectImage="sustainable_agriculture" ProjectName="Sustainable Agriculture" ProjectDescription="International Volunteer HQ’s Sustainable Agriculture and Community Development project encourages young people in Jamaica to get involved in agriculture and develop an interest in farming, beekeeping, soap making, paper making and other skills which may help generate future income opportunities."/>
                    </a>
                </div>
            </div>
            <div className="footer-img"/>
        </div>
    )
}

export default GetInvolvedPage;