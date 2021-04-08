import React, { useState } from 'react';
import './style.css'
const openArrow = require('../../assets/open.svg');
const closeArrow = require('../../assets/close.svg');

const ContainerWithSidebar = ({sidebar,content,sidebarTitle}) => {
    let [state, setState] = useState({
        isToggled : false,
    });
   
    const handleToggleSidebar = () => {
        setState({isToggled:!state.isToggled})
    }
    return (
        <div className={`bsf_container-wrapper ${state.isToggled ? 'toggled' : ''}`}>
            <div className="bsf-sidebar-wrapper">                    
                <div className="bsf-sidebar-inner-wrapper">
                    <div className="bsf-sidebar-title-wrap">
                        {sidebarTitle}                                   
                        <img className="toggle-sidebar-icon" alt="togglebutton"  src={state.isToggled ? openArrow : closeArrow} onClick={handleToggleSidebar}/>
                    </div>
                    { sidebar }
                </div>
            </div>
            <div className="bsf-content-wrapper">
                <div className="bsf-content-inner-wrapper">                
                    {content}
                </div>
            </div>
        </div>
    )
}

export default ContainerWithSidebar;