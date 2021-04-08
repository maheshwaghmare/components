import React, { useState } from 'react';
import {ContainerWithSidebar,Grid,RadioGroup} from '../index';
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
        heading: 'Mountain',
        thumbnail: "https://websitedemos.net/wp-content/uploads/2020/04/mountain-1-600x800.jpg",
        btn: 'Visit Full Site',
    },
    {
        heading: 'Mountain',
        thumbnail: "https://websitedemos.net/wp-content/uploads/2020/04/mountain-1-600x800.jpg",
        btn: 'Visit Full Site',
    },
    {
        heading: 'Mountain',
        thumbnail: "https://websitedemos.net/wp-content/uploads/2020/04/mountain-1-600x800.jpg",
        btn: 'Visit Full Site',
    },
    {
        heading: 'Mountain',
        thumbnail: "https://websitedemos.net/wp-content/uploads/2020/04/mountain-1-600x800.jpg",
        btn: 'Visit Full Site',
    },
    {
        heading: 'Mountain',
        thumbnail: "https://websitedemos.net/wp-content/uploads/2020/04/mountain-1-600x800.jpg",
        btn: 'Visit Full Site',
    },
]

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
let choices1 = [
    {
        label: 'All',
        value: "all",        
    },
    {
        label: 'Free',
        value: "free",        
    },
]
let choices2 = [
    {
        label: 'All',
        value: "all",        
    },
    {
        label: 'Blog',
        value: "blog",        
    },
]

const Panel = ({  }) => {

    return (
        <ContainerWithSidebar
            sidebarTitle ="Filters & Refine" 
            sidebar={
                <div>                   
                    <RadioGroup title="Type" choices={choices} /* onChange={handleChange} */ defaultSelected="pages"/>
                    <RadioGroup title="Style" choices={choices} /* onChange={handleChange} */ defaultSelected="pages"/>

                </div>
            }
            content={ <Grid items={items} />}
        />
        
    )
}

export default Panel;