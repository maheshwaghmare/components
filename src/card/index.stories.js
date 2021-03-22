import React from 'react';

import { Card } from '../index';

export default {
    title: 'Card',
    component: Card,
}

export const Default = () => {
    return (
        <Card
            heading='Outdoor Adventure'
            thumbnail="https://websitedemos.net/wp-content/uploads/2019/07/outdoor-adventure-02-home-600x800.jpg"
            btn='Visit Full Site'
        />
    )
};
