### How to use?

```js
import { RadioGroup } from '@maheshwaghmare/components';

const Hello = () => {

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

    return (
        <RadioGroup title="Type" choices={choices} /* onChange={handleChange} */ defaultSelected="pages"/>
    )
}

export default Hello;
```

