import React from 'react';

import { SearchBox } from './index';

export default {
    title: 'SearchBox',
    component: SearchBox,
}

export const Default = () => <SearchBox placeholder="custom" />

export const WithEvent = () =>  <SearchBox 
                                    placeholder="Custom Message"
                                    // onChangeEvent={}
                                    // value=""
                                />