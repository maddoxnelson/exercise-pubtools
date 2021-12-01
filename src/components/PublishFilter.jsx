import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

const PublishFilter = ({ articles, setFilteredArticles }) => {
    const [selection, setSelection] = useState("all");

    // Filter your published articles here.

    return <div className="flex flex-column" onChange={({ target: { value } }) => console.log("Something goes here!", value)}>
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
