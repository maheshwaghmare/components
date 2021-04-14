import React from 'react';
import './style.css';

const Card = ({ heading, thumbnail }) => {

    return (
        <div className="bsf-card-wrap">
            <div className="bsf-card-image-wrapper"><img src={thumbnail} className="bsf-card-image" /></div>
            <p className="bsf-card-caption">{heading}</p>      
        </div>
    )
}

export default Card;