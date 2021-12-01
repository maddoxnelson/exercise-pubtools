import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

const PublishFilter = ({ articles, setFilteredArticles }) => {
    const [selection, setSelection] = useState("all");

    const publishedArticles = articles.filter(item => item.published);
    const unpublishedArticles = articles.filter(item => !item.published);

    useEffect(() => {
        // Filter your selection here

        const filterArticles = () => {
            switch(selection) {
                case "published":
                    return publishedArticles;
                case "unpublished":
                    return unpublishedArticles;
                default:
                    return articles;
            }
        }
        
        const filteredArticles = filterArticles();
        setFilteredArticles(filteredArticles);
        
    }, [selection])

    return <div className="flex flex-column" onChange={({ target: { value } }) => setSelection(value)}>
        <label>Published Status</label>
        <RadioButton value="all" name="publish">All</RadioButton>
        <RadioButton value="published" name="publish">Published only</RadioButton>
        <RadioButton value="unpublished" name="publish">Unpublished only</RadioButton>
    </div>
}

PublishFilter.propTypes = {
    articles: PropTypes.array,
    setFilteredArticles: PropTypes.func
}

export default PublishFilter;
