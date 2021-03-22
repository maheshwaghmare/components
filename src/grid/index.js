import React from 'react';

import Card from '../card';

const Grid = ({ items }) => {

    const gridStyle = {
        display: 'flex',
    }

    const gridItemStyle = {
        width: '33.33%',
    }

    return (
        <div style={gridStyle}>
            {items.map(({ heading, thumbnail, btn }) => {
                return (
                    <Card
                        heading={heading}
                        thumbnail={thumbnail}
                        btn={btn}
                        style={gridItemStyle}
                    />
                )
            })}
        </div>
    )
}

export default Grid;