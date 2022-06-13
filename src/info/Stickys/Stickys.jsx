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
                            titel= 'Programs'
                            photo= {One}
                            ></SkillBar>
                            <SkillBar
                                titel='Programming'
                                photo={Two}
                            ></SkillBar>
                            <SkillBar
                                titel='Languages'
                                photo={Three}
                            ></SkillBar>
                            <SkillBar
                                titel='Softs'
                                photo={Four}
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