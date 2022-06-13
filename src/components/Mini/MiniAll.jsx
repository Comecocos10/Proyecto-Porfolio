import React from 'react';
import './Mini.css'
import Mini from '../../components/Mini/Mini';
import Mini2 from '../../components/Mini/Mini2';
import Mini3 from '../../components/Mini/Mini3';
import Mini4 from '../../components/Mini/Mini4';
import Mini5 from '../../components/Mini/Mini5';

export default function MiniAll() {

    return <div className='MiniAll'>
        <Mini/>
        <Mini2/>
        <Mini3/>
        <Mini4/>
        <Mini5/>
    </div>
}