import React from 'react';
import './SkillBar.css';
import One from '../../recursos/1.png'
import SkillBarmini from '../../components/SkillBar/SkillBarmini'

function Bar(props) {

    return (
        <div className='total-skills'>
            <div className='titel-skill'>
                <img className='numer' src={props.photo} alt="" />
                <h2 className='titel-text'>{props.titel}</h2>
            </div>
            <div className='skill-list'>
                <div className='skill-minilist'>
                    <SkillBarmini
                        program ={props.program1}/>
                    <SkillBarmini
                        program={props.program2}/>
                    <SkillBarmini
                        program={props.program3} />
                    <SkillBarmini
                        program={props.program4} /> 
                </div>
                <div>
                    <SkillBarmini
                        program={props.program5} />
                    <SkillBarmini
                        program={props.program6} />
                    <SkillBarmini
                        program={props.program7} />
                    <SkillBarmini
                        program={props.program8} />
                </div>
                
                

            </div>
        </div>
    );
}

export default Bar;