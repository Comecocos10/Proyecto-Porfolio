import React from 'react';
import './Mini.css'
import MeTop from '../../recursos/Metop.png'
import GhostTop from '../../recursos/Ghosttop.png'

export default function Mini2() {

    return <div className='Mini blue'>
        <img className='me-top ghosttop' src={GhostTop} />
        <img className='me-top' src={MeTop} />
    </div>
}