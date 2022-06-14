import React from 'react';
import './Finish.css';
import All2 from '../../recursos/finish.gif';

export default function Finish() {
    
    return <div className='finish'>
        <h3 className='titel-finish'>Finish</h3>
        <img className='video-finsh' src={All2} />           
        <p className='congratulation'> Congratualtion!</p>
        <p className='captured'> You have captured them all</p>
        <a className='email' href="mailto:andrea.hernan.93@gmail.com">¡¡You win my email!!</a>
    </div>
}