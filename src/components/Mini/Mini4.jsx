import React from 'react';
import './Mini.css'
import MeTop from '../../recursos/Metop.png'
import GhostTop from '../../recursos/Ghosttop.png'
import Ghost2Top from '../../recursos/Ghost2top.png'
import Ghost3Top from '../../recursos/Ghost3top.png'

export default function Mini4() {

    return <div className='Mini pink'>
        <img className='me-top ghosttop' src={Ghost3Top} />
        <img className='me-top ghosttop' src={Ghost2Top} />
        <img className='me-top ghosttop' src={GhostTop} />
        <img className='me-top' src={MeTop} />
    </div>
}