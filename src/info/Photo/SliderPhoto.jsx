import React, { useState } from 'react';
import './Photo.css';

function Trozo(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className='Sign-photo'>
            <svg onClick={() => setCounter(counter === 0 ? props.data.length - 1 : counter - 1)} className='arrowseccion izqui' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="black" />
            </svg>
            {
                props.data && <div className='change-photo'>
                    <img className='img-phto' src={props.data[counter].photo} />
                </div>
            }
            <svg onClick={() => setCounter(counter === props.data.length - 1 ? 0 : counter + 1)} className='arrowseccion drcha' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="black" />
            </svg> 
        </div>
               
    );
}

export default Trozo;