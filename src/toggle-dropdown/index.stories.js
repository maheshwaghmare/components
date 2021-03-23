import React from 'react';

import { ToggleDropdown } from '../index';

export default {
    title: 'ToggleDropdown',
    component: ToggleDropdown,
}

let options = {
    gutenberg: {
        slug:'gutenberg',
        title:'Gutenberg',
        url:'https://websitedemos.net/wp-content/plugins/astra-sites-showcase/assets/images/gutenberg.jpg'
    },
    brizy: {
        slug:'brizy',
        title:'Brizy',
        url:'https://websitedemos.net/wp-content/plugins/astra-sites-showcase/assets/images/brizy.jpg'
    },
    elementor: {
        slug:'elementor',
        title:'Elementor',
        url:'https://websitedemos.net/wp-content/plugins/astra-sites-showcase/assets/images/elementor.jpg'
    },
    beaver: {
        slug:'beaver',
        title:'Beaver Builder',
        url:'https://websitedemos.net/wp-content/plugins/astra-sites-showcase/assets/images/beaver-builder.jpg'
    },
    
}

export const Default = () => (
                                <ToggleDropdown 
                                defaulSelected = "gutenberg"
                                options={ options }
                                // onOptionSelect = {}                               
                                />
                            )

// export const Primary = () => <Button text="Primary" primary />

// export const Secondary = () => <Button text="Secondary" secondary />
