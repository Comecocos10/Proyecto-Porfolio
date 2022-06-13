import React, { useState } from 'react';
import './Stickys.css';
import SkillBar from '../../components/SkillBar/SkillBar'
import One from '../../recursos/1.png'
import Two from '../../recursos/2.png'
import Three from '../../recursos/3.png'
import Four from '../../recursos/4.png'


function Sticky(props) {
    const [counter, setCounter] = useState(0);

    return (
        <div className="Sign">
            <svg onClick={() => setCounter(counter === 0 ? props.data.length - 1 : counter - 1)} className='arrowseccion' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="#232A2A" />
            </svg>
            {
                props.data && <div >
                    <section className='change-sign'>
                        <p className='text-sign'>{props.data[counter].name}</p>
                    </section>
                    <section className='info-page'>
                        <div className='stickys'>
                                <SkillBar 
                                    titel= 'Design'
                                    photo={One} 
                                    program1='Figma'
                                    program2='Ilustrator'
                                    program3='Indegin' 
                                    program4='Miro'
                                    program5='Blender'
                                    program6='Photoshop'
                                    program7='Premier'
                                    program8='Lightroom'
                                ></SkillBar>
                                <SkillBar
                                    titel='Programming'
                                    photo={Two}
                                    program1='Vs Code'
                                    program2='HTML'
                                    program3='CSS'
                                    program4='Javascript'
                                    program5='React'
                                    program6='Github'
                                    program7='Wordpress'
                                    program8='Saas'
                                ></SkillBar>
                               <SkillBar
                                    titel='Administration'
                                    photo={Three}
                                    program1='Suit Microsoft Tools'
                                    program2='Suit Google Tools'
                                    program3='Notion'
                                    program4='Trello'
                                    program5='Confluence'
                                    program6='Metodologí Agile'
                                    program7='Leadership'
                                    program8='Planing Research'
                                ></SkillBar>
                                <SkillBar
                                    titel='Softs'
                                    photo={Four}
                                    program1='Analisis'
                                    program2='Public Speeach'
                                    program3='Adaptability'
                                    program4='Empathy'
                                    program5='Teamwork'
                                    program6='Friends and manners'
                                    program7='Optimist'
                                    program8='Entusiams'
        
                                ></SkillBar> 
                        </div>    
                    </section>

                </div>
            }
            <svg onClick={() => setCounter(counter === props.data.length - 1 ? 0 : counter + 1)} className='arrowseccion drcha-s' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="#232A2A" />
            </svg>
        
        </div>
    );

}

export default Sticky;