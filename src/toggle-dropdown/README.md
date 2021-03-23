### How to use?

```sh
npm i @maheshwaghmare/components
```

```js
import { ToggleDropdown } from '@maheshwaghmare/components';

let options = {
    option1: {
        slug:'option1',
        title:'Label',
        url:'logo_url'
    },
    option2: {
        slug:'option2',
        title:'Label',
        url:'logo_url',
    }, 
}

const Hello = () => {
    return (
        <ToggleDropdown 
            defaulSelected = "option1"
            options={ options }
            // onOptionSelect = {}    //Optional                           
        />
    )
}

export default Hello;
```

