import React from 'react';

import { Grid } from '../index';

export default {
    title: 'Grid',
    component: Grid,
}

export const Default = () => {
    let items = [
        {
            heading: 'Outdoor Adventure',
            thumbnail: "https://websitedemos.net/wp-content/uploads/2019/07/outdoor-adventure-02-home-600x800.jpg",
            btn: 'Visit Full Site',
        },
        {
            heading: 'Mountain',
            thumbnail: "https://websitedemos.net/wp-content/uploads/2020/04/mountain-1-600x800.jpg",
            btn: 'Visit Full Site',
        },
        {
            heading: 'Pet Care',
            thumbnail: "https://websitedemos.net/wp-content/uploads/2020/01/pet-care-04-home-600x800.jpg",
            btn: 'Visit Full Site',
        },
        {
            heading: 'Pet Care',
            thumbnail: "https://websitedemos.net/wp-content/uploads/2020/01/pet-care-04-home-600x800.jpg",
            btn: 'Visit Full Site',
        }
    ]

    return (
        <Grid items={items} columns="3" />
    )

};

