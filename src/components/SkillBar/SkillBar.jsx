import React from 'react';
import './SkillBar.css';
import One from '../../recursos/1.png'
import SkillBarmini from '../../components/SkillBar/SkillBarmini'

function Bar(props) {

    return (
        <div>
            <div className='titel-skill'>
                <img className='numer' src={props.photo} alt="" />
                <h2 className='titel-text'>{props.titel}</h2>
            </div>
            <div className='skill-list'>
                <SkillBarmini
                program ='Figma'/>
                <SkillBarmini
                program='Adobe'/>            
            </div>
        </div>
    );
}

export default Bar;