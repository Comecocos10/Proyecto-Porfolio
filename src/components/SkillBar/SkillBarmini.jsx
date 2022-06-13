import React from 'react';
import './SkillBar.css';
import One from '../../recursos/1.png'

function BarMini(props) {

    return (
        <div className='skill-list'>
            <div className='skill-modal'>
                <p className='text-skill-bar'>{props.program}</p>
                <div className='skill-bar-c'>
                    <div className='skill-bar-interna'></div>
                </div>
            </div>               
        </div>
    );
}

export default BarMini;