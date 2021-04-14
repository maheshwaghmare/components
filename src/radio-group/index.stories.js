import React from 'react';

import { RadioGroup } from '../index';

export default {
    title: 'RadioGroup',
    component: RadioGroup,
}

let choices = [
    {
        label: 'Full Website',
        value: "full website",        
    },
    {
        label: 'Pages',
        value: "pages",        
    },
    {
        label: 'Blocks',
        value: "blocks",        
    },
   
    
]


export const Default = () => <RadioGroup title="Type" choices={choices} /* onChange={handleChange} */ defaultSelected="pages"/>
