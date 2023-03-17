import React from 'react';
import './SeccionSign.css';

function SeccionSign2(props) {
    return (
        <div className="Sign">
            <div className='fondo-sign'>
                <svg width="295" height="105" viewBox="0 0 578 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.607 234H11V161.683V89.366L86.9098 10H578V171.865L502.607 234Z" fill={props.colorlight} />
                    <path d="M476 214.5H0V145.25V76L73.5 0H549V155L476 214.5Z" fill={props.colordark} />
                    <path d="M463 193.5H29.5V142.738V89.1575L92.4235 24.3183H525.495V142.738L463 193.5Z" fill={props.colordark} stroke={props.colorlight} stroke-width="6" />
                </svg>
            </div>

            <div className="Sign2 noarrow">
                    <div className='change-sign'>
                        <p className='text-sign onlyT'>{props.name}</p>
                    </div>
            </div>
        </div>
    );
}

export default SeccionSign2;