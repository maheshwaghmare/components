import React from 'react';

import Badge from './index';

export default {
    title: 'Badge',
    component: Badge,
}

export const Default = () => <Badge>TOP</Badge>

export const Red = () => <Badge red>TOP</Badge>

export const Round = () => <Badge round>TOP</Badge>

export const RoundRed = () => <Badge round red>TOP</Badge>
