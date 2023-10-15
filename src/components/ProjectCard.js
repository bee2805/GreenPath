import React from "react";

function ProjectCard(props) {

    return(
        <div className="projectCard-container">
            <div className={props.ProjectImage}/>
            <div className="card-info">
                <h3>{props.ProjectName}</h3>
                <p>{props.ProjectDescription}</p>
            </div>
        </div>
    )
}

export default ProjectCard;