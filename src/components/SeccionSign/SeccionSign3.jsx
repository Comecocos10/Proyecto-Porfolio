import React, {useState} from 'react';
import './SeccionSign.css';
import Stickys from '../../info/Stickys/Stickys';
import Photo from '../../info/Photo/Photo';




function SeccionSign3(props) {
    const [counter, setCounter] = useState(0);
    const SkillList = [
        {
            type: 'sticky',
            name: 'Skills'
        },
        {
            type: 'photo',
            name: 'Ability',
        },
    ];

    return (
        <div className="Sign">
            <div className='fondo-sign'>
                <svg width="295" height="105" viewBox="0 0 578 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.607 234H11V161.683V89.366L86.9098 10H578V171.865L502.607 234Z" fill={props.colorlight} />
                    <path d="M476 214.5H0V145.25V76L73.5 0H549V155L476 214.5Z" fill={props.colordark} />
                    <path d="M463 193.5H29.5V142.738V89.1575L92.4235 24.3183H525.495V142.738L463 193.5Z" fill={props.colordark} stroke={props.colorlight} stroke-width="6" />
                </svg>
            </div>

            <svg onClick={() => setCounter(counter === 0 ? props.data.length - 1 : counter - 1)} className='arrowseccion' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="#232A2A" />
            </svg>
            {
                props.data && <div >
                    <section className='change-sign'>
                        <p className='text-sign'>{props.data[counter].name}</p>
                    </section>
                    <section className='info-page-dos'>                    
                        {SkillList.map(SkillList => SkillList.type = "sticky" ? <Stickys /> : <Photo />)}
                    </section>
                
                </div>
            }
        <svg onClick={() => setCounter(counter === props.data.length - 1 ? 0 : counter + 1)} className='arrowseccion drcha-s' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 25L4 13L22 1V25Z" fill="#232A2A" />
        </svg>
        
        </div >
    );
}

export default SeccionSign3;