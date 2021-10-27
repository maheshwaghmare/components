import React from 'react';

const TwoColorHeading = ( { first, second } ) => {

    const secondStyles = {
        color: 'red',
    };

    const firstStyles = {
        color: 'green',
    };

    return (
        <span>
            {
                first
                ?
                <span style={firstStyles}>{first}</span>
                :
                null
            }
            {
                second
                ?
                <span style={secondStyles}>{second}</span>
                :
                null
            }
        </span>
    )
}

export default TwoColorHeading;