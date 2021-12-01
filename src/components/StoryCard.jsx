import React from "react";

const StoryCard = ({ headlines, taxonomy, credits, published }) => {
    return <div className="card">
        <label>{taxonomy.primary_section.name}</label>
        <h3>{headlines.basic}</h3>
        {
            credits.by.map((author, i) => {
                return <p key={i}>{author}</p>
            })
        }
        <div>Publish status: <strong>
            {published ? "Published" : "Unpublished"}</strong></div>
    </div>
}

export default StoryCard;
