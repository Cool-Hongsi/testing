import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';

export default class Headline extends React.Component{

    render(){

        const { header, desc } = this.props; // Same as this.props.header & this.props.desc

        if(!header){ // As long as there is no header props, it should return null
            return null;
        }

        return(
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        )
    }
}

// Validate props
Headline.propTypes = {
    header : PropTypes.string,
    desc : PropTypes.string,
    tempArr : PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}