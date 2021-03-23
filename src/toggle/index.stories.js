import React from 'react';

import { Toggle } from '../index';

export default {
    title: 'Toggle',
    component: Toggle,
}

export const Default = () => <Toggle text="Default" />

export const Primary = () => <Toggle text="Toggled" toggle />