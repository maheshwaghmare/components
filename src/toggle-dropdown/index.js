import React,{useState} from 'react';
import './style.css'

const ToggleDropdown = ({ options,defaulSelected,className,onOptionSelect}) => {

    const customclass = className ? className : '';

    let [state, setState] = useState({
        showDropdown:false,
        currentSelection:defaulSelected,
    });

    var optionsHtml = Object.keys(options).map(function(value,index){        
        return (
            <li key={index} className="bsf_dropdown-list-item" onClick={()=>handleSelection(options[value].slug)}> 
                <img src={options[value].url} className="bsf_list-item-logo" />
                <span className="bsf_list-item-label">{options[value].title}</span>                
            </li>
        );
    })
   
    const toggleDropdown = () =>{
        setState(prevState => ({
            ...state, 
            showDropdown:!state.showDropdown 
        }));
    }
    let handleSelection = (value) => {
        setState(prevState => ({
            ...state, 
            currentSelection:value,
            showDropdown:!state.showDropdown
        }));      
        
       //Custom Event.
        if(typeof onOptionSelect === 'function'){
                onOptionSelect(value);
        }
    }
    
    return (
        <div className={`bsf_toggle-dropdown-wrap ${customclass}`}>
            <div className="bsf_selected-wrap" onClick={()=> toggleDropdown()}>
                <span className="bsf_selected-option-logo" >
                    <img src={options[state.currentSelection].url} />
                </span>
                <span className="bsf_selected-option-title">{options[state.currentSelection].title}</span> 
            </div>
            {state.showDropdown && (
                <div className="bsf_dropdown-options-wrap" > 
                    <ul className="bsf_dropdown-list-wrap">
                        {optionsHtml}
                    </ul>
                </div>
            )}        
        </div>
    )
}

export default ToggleDropdown;