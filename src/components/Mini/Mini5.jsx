import React from 'react';
import './Mini.css'
import MeTop from '../../recursos/Metop.png'
import GhostTop from '../../recursos/Ghosttop.png'
import Ghost2Top from '../../recursos/Ghost2top.png'
import Ghost3Top from '../../recursos/Ghost3top.png'
import Ghost4Top from '../../recursos/Ghost4top.png'

export default function Mini5() {

    return <div className='Mini orange'>
        <img className='me-top ghosttop' src={Ghost4Top} />
        <img className='me-top ghosttop' src={Ghost3Top} />
        <img className='me-top ghosttop' src={Ghost2Top} />
        <img className='me-top ghosttop' src={GhostTop} />
        <img className='me-top' src={MeTop} />
    </div>
}