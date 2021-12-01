import React, { Fragment } from "react";
import PropTypes from "prop-types";

const RadioButton = ({ value, children, name }) => {
    return (
        <div>
            <input type="radio" name={name} value={value}></input>
            <label htmlFor={value}>{children}</label>
        </div>
    )
}

RadioButton.propTypes = {
    children: PropTypes.node,
    value: PropTypes.string,
    name: PropTypes.string
}

export default RadioButton;