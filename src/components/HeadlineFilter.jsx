import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HeadlineFilter = ({ articles, setFilteredArticles }) => {
    const [text, setText] = useState();

    useEffect(() => {
        const filteredArticles = articles.filter(article => {
            return article.headlines.basic.toLowerCase().includes(text.toLowerCase())
        });
        setFilteredArticles(filteredArticles)
    }, [text])

    return <div className="flex flex-column">
        <label htmlFor="headline">Headline</label>
        <input id="headline" onChange={({ target: { value} }) => setText(value)} />
    </div>
}

HeadlineFilter.propTypes = {
    articles: PropTypes.array,
    setFilteredArticles: PropTypes.func
}

export default HeadlineFilter;
