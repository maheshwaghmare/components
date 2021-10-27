import React from 'react';

import HALF from './half.png';
import FULL from './full.png';

const Stars = ( { rating } ) => {


    let ratingNumber = parseFloat( rating );
    console.log( 'ratingNumber', ratingNumber );

    if( ! ratingNumber ) {
        return '';
    }

    let hasHalfStar = false;
    if( ratingNumber % 1 !== 0 ) {
        hasHalfStar = true;
    }

    let limit = Math.floor( ratingNumber ) > 5 ? 5 : Math.floor( ratingNumber );
    let fullStars = new Array( limit ).fill( '*' );
    
    console.log( 'fullStars' );
    console.log( fullStars );
    console.log( 'hasHalfStar' );
    console.log( hasHalfStar );
    const styles = {
        width: 20,
    };

    return (
        <span>
            {
                fullStars.map( item => <img style={styles} src={FULL} /> )
            }
            {
                hasHalfStar && limit < 5 
                ?
                    <img style={styles} src={HALF} />
                : 
                null
            }
        </span>
    )
}

export default Stars;