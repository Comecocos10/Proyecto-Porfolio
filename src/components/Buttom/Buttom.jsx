import React from 'react';
import './Buttom.css'


export default function Buttom(props) {

    return <div className='buttom'>
        <button className='pushable'>
                <span className='front'>
                    {props.text}
                </span>
            </button>

    </div>
}