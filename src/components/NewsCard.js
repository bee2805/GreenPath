import React from "react";

function NewsCard(props) {

    return(
        <a href={props.articleLink} target="_blank">
            <div className="newsCard-container">
                <img src={props.articleImage} alt="thumbnail image" width="500" height="600"/>
                <div className="news-card-info">
                    <p>{props.source} • {props.date}</p>
                    <h2>{props.articleTitle}</h2>
                </div>
            </div>
        </a>
    )
}

export default NewsCard;