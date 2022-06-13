import React from 'react';
import './Titel.css';
import logofull from '../../recursos/logo-full.png'


export default function Titel() {
    
    return <div className='titel'>
        <h2 className='hi'> Hi! I'm...</h2>
        <div className='logo-titel'>
            <img className='logo-full' src={logofull} />
            <p className='text-titel'>Ux-Ui and Product Designer</p>
        </div>
    </div>

}