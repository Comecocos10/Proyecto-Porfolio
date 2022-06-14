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
                        program ={props.program1}
                        class={props.class1}/>
                    <SkillBarmini
                        program={props.program2}
                        class={props.class2}/>
                    <SkillBarmini
                        program={props.program3}
                        class={props.class3} />
                    <SkillBarmini
                        program={props.program4}
                        class={props.class4} /> 
                </div>
                <div>
                    <SkillBarmini
                        program={props.program5}
                        class={props.class5} />
                    <SkillBarmini
                        program={props.program6}
                        class={props.class6} />
                    <SkillBarmini
                        program={props.program7}
                        class={props.class7} />
                    <SkillBarmini
                        program={props.program8}
                        class={props.class8} />
                </div>
                
                

            </div>
        </div>
    );
}

export default Bar;