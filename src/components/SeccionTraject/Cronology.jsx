import React from 'react';
import './Cronology.css';
import arrow from '../../recursos/arrow-trject.png'

export default function SeccionTraject(props) {


    return <div className='crono'>
        <div className='years'>
            <p className='year bi'>2013</p>
            <p className='year'>2015</p>
            <p className='year tri'>2016</p>
            <p className='year'>2017</p>
            <p className='year bi'>2018</p>
            <p className='year'>2020</p>
            <p className='year non'>2021</p>
            <p className='year'>2022</p>
        </div>
        <img className='arrow-guide' src={arrow} alt="" />
        
    </div>
}