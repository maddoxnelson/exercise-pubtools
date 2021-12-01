import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HeadlineFilter = ({ articles, setFilteredArticles }) => {

    // Filter your articles here.

    return <div className="flex flex-column">
        <label htmlFor="headline">Headline</label>
        <input id="headline" onChange={({ target: { value} }) => console.log("Something goes here!", value)} />
    </div>
}

HeadlineFilter.propTypes = {
    articles: PropTypes.array,
    setFilteredArticles: PropTypes.func
}

export default HeadlineFilter;
