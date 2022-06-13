import React, { useState } from 'react';
import './SeccionTraject.css';
import fondo from '../../recursos/cabecera-gray.png'


export default function SeccionTraject(props) {    
        
    const [isOpened2, setIsOpened] = useState(false);

    function showTrajectory() {
        setIsOpened(!isOpened2);
    }
    
    return  <div className='total-trajectory'>
        <img className='line-traject' src={props.line} alt="" />
        <img className='StudyJob' src={props.imagen} onClick={showTrajectory}/>
        <p className='text-trajectory'>{props.nametraject}</p>
        {isOpened2 === true ? <section className='trajectory-open'>
            <img className='img-info' src={fondo} alt="" />
            <div className='info-trajectory'>
                <p className='text-info one'> {props.nametraject}</p>
                <p className='text-info two'> {props.year}</p>
                <p className='text-info three'> {props.local}</p>
            </div>
        </section> : ''}
    </div>
}