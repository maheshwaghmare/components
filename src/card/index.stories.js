import React from 'react';

import { Card } from '../index';
import { Heading, Image, Button } from '../index';

export default {
    title: 'Card',
    component: Card,
}

export const Default = () => {
    return (
        <Card>
            <Image src="https://websitedemos.net/wp-content/uploads/2019/07/outdoor-adventure-02-home-600x800.jpg" />
            <Heading>Outdoor Adventure</Heading>
            <Button>Visit Full Site</Button>
        </Card>
    )
};
