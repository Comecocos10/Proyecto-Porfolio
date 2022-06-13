import React from 'react';
import './ButtomBack.css'


export default function ButtomBack(props) {

    return <div className='buttomback'>
        <svg className='arrow-back' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 25L4 13L22 1V25Z" fill="#22B5A3" />
        </svg>
        <p className='text-back'>Back</p>

    </div>
}