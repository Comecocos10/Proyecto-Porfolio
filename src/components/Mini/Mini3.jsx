import React from 'react';
import './Mini.css'
import MeTop from '../../recursos/Metop.png'
import GhostTop from '../../recursos/Ghosttop.png'
import Ghost2Top from '../../recursos/Ghost2top.png'

export default function Mini3() {

    return <div className='Mini red'>
        <img className='me-top ghosttop' src={Ghost2Top} />
        <img className='me-top ghosttop' src={GhostTop}/>
        <img className='me-top' src={MeTop} />
    </div>
}