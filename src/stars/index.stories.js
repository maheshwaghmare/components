import React from 'react';

import Stars from './index';

export default {
    title: 'Stars',
    component: Stars,
}

export const Default = () => <Stars rating="5" />
export const Half = () => <Stars rating="0.5" />
export const One = () => <Stars rating="1" />
export const OneHaf = () => <Stars rating="1.5" />
export const Two = () => <Stars rating="2" />
export const TwoHalf = () => <Stars rating="2.5" />
export const Three = () => <Stars rating="3" />
export const ThreeHalf = () => <Stars rating="3.5" />
export const Four = () => <Stars rating="4" />
export const FourHalf = () => <Stars rating="4.5" />
export const Five = () => <Stars rating="5" />
export const MoreThanFive = () => <Stars rating="5.5" />
