import React from 'react';
import './TitelGhost.css';


export default function Titel(props) {

    return <div className='titel-ghost'>
        <h2 className='hi2'> Hi! I'm...</h2>
        <div className='logo-titel'>
            <h3 className='name-ghost'>{props.name}</h3>
        </div>
    </div>

}