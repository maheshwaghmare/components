import React, { useState } from 'react';
import styled from "styled-components";

const RadioChoicesWrap = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
`;
const Label = styled.label`
    padding-left: 10px;
`;
const Input = styled.input`
    margin: 0;
`;

const RadioGroup = ({ title, choices,onChange,defaultSelected }) => {

    let [state, setState] = useState({       
        selected:defaultSelected,
    });

    const handleChange = (e) => {

        setState({selected:e.target.value});

        if(typeof onChange === 'function'){
            onChange(e.target.value);
        }         
    }
    return (
        <div className="bsf_radio-group-wrap">
            <p className="bsf_radio-group-title">{title}</p>
            {choices.map(({ label, value }) => {
                const uniqueID = value.substring(0, 3)+title.substring(0, 3);
                return (
                    <RadioChoicesWrap key={label} className="radio-group-choices-wrap" onChange={(e)=>handleChange(e)}>
                        <Input 
                            type="radio" 
                            id={uniqueID}
                            name={title}
                            value={value}
                            className="radio-group-input"
                            defaultChecked={state.selected === value ? true : false }
                        />
                        <Label htmlFor={uniqueID} className="radio-group-label">{label}</Label>
                    </RadioChoicesWrap>
                )
            })}
        </div>
    )
}

export default RadioGroup;