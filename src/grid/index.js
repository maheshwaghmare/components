import React from 'react';
import styled from "styled-components";

import Card from '../card';

const Grid = ({ items,columns }) => {


const GridWrap = styled.div`
    display:grid;
    grid-template-columns: ${props => columns ? "repeat("+columns+" ,1fr)" : "1fr 1fr 1fr"};
    grid-gap:1.5em;
`;

return (
        <GridWrap>
            {items.map(( item,key ) => {
                return (
                    <Card
                        heading={item.heading}
                        thumbnail={item.thumbnail}
                        btn={item.btn} 
                        key={key}                      
                    />
                )
            })}
        </GridWrap>
    )
}

export default Grid;