import React from 'react';
import './Footer.css';


export default function RRSS(props) {

    return <div>
        <a className='link-rrss' href={props.link}>
            <img className='img-rrss' src={props.ghostrrss} />
        </a>
    </div>
}
