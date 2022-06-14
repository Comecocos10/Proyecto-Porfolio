import React from 'react';
import './SkillBar.css';

function BarMini(props, ) {

    return (
        <div className='skill-list'>
            <div className='skill-modal'>
                <p className='text-skill-bar'>{props.program}</p>
                <div className='skill-bar-c'>
                    <div className={props.class}></div>
                </div>
            </div>               
        </div>
    );
}

export default BarMini;