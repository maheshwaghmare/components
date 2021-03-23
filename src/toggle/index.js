import React, { useState } from 'react';

const Toggle = ({ text, toggle }) => {

    let [hasToggle, setToggle] = useState(toggle ? toggle : false);

    return (
        <div onClick={() => setToggle(!hasToggle)} >{text}
            {hasToggle ? 'Toggled' : 'Not toggled'}
        </div>
    )
}

export default Toggle;