import React from 'react';
import './style.scss';

export default class Headline extends React.Component{

    constructor(props){
        super(props);
    }

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