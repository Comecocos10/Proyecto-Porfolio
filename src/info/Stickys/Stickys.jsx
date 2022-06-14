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
                                    class1='skill-bar-interna'
                                    program2='Ilustrator'
                                    class2='skill-bar-interna ochenta'
                                    program3='Indegin'
                                    class3='skill-bar-interna sesenta'
                                    program4='Miro'
                                    class4='skill-bar-interna ochenta'
                                    program5='Blender'
                                    class5='skill-bar-interna setenta'
                                    program6='Photoshop'
                                    class6='skill-bar-interna setenta'
                                    program7='Premier'
                                    class7='skill-bar-interna cincuenta'
                                    program8='Lightroom'
                                    class8='skill-bar-interna cuarenta'
                                ></SkillBar>
                                <SkillBar
                                    titel='Programming'
                                    photo={Two}
                                    program1='Vs Code'
                                    class1='skill-bar-interna noventa'
                                    program2='HTML'
                                    class2='skill-bar-interna sesenta'
                                    program3='CSS'
                                    class3='skill-bar-interna ochenta'
                                    program4='Javascript'
                                    class4='skill-bar-interna cuarenta'
                                    program5='React'
                                    class5='skill-bar-interna cincuenta'
                                    program6='Github'
                                    class6='skill-bar-interna cincuenta'
                                    program7='Wordpress'
                                    class7='skill-bar-interna treinta'
                                    program8='Saas'
                                    class8='skill-bar-interna cincuenta'
                                ></SkillBar>
                               <SkillBar
                                    titel='Administration'
                                    photo={Three}
                                    program1='Suit Microsoft Tools'
                                    class1='skill-bar-interna noventa'
                                    program2='Suit Google Tools'
                                    class2='skill-bar-interna noventa'
                                    program3='Notion'
                                    class3='skill-bar-interna setenta'
                                    program4='Trello'
                                    class4='skill-bar-interna setenta'
                                    program5='Confluence'
                                    class5='skill-bar-interna cincuenta'
                                    program6='Agile Methodology'
                                    class6='skill-bar-interna ochenta'
                                    program7='Planing Research'
                                    class7='skill-bar-interna ochenta'
                                    program8='Leadership'
                                    class8='skill-bar-interna setenta'
                                ></SkillBar>
                                <SkillBar
                                    titel='Softs'
                                    photo={Four}
                                    program1='Analysis'
                                    class1='skill-bar-interna ochenta'
                                    program2='Public Speaking'
                                    class2='skill-bar-interna sesenta'
                                    program3='Adaptability'
                                    class3='skill-bar-interna noventa'
                                    program4='Empathy'
                                    class4='skill-bar-interna setenta'
                                    program5='Teamwork'
                                    class5='skill-bar-interna ochenta'
                                    program6='Friends and manners'
                                    class6='skill-bar-interna sesenta'
                                    program7='Optimism'
                                    class7='skill-bar-interna noventa'
                                    program8='Enthusiasm'
                                    class8='skill-bar-interna setenta'
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