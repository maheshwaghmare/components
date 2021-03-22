import React from 'react';

import { Button } from '../index';

export default {
    title: 'Components/Button',
    component: Button,
}

export const Default = () => <Button text="Default" />

export const Primary = () => <Button text="Primary" primary />

export const Secondary = () => <Button text="Secondary" secondary />
