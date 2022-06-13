import React, { useState, useEffect } from 'react';
import './Finish.css';
import All from '../../recursos/ThreeD/finish.glb'

export default function Finish() {

    const [cameraOrbit, setCameraOrbit] = useState(0);
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const isLeft = event.clientX < window.innerWidth / 2;
            setCameraOrbit(isLeft ? 30 : -50);
        })
    }, []);

    
    return <div className='finish'>
        <h3 className='titel-finish'>Finish</h3>           
        <model-viewer
            id="reveal"
            className="finish-model"
            interpolation-decay="100" 
            camera-orbit={cameraOrbit + 'deg'}
            enable-pan src={All}  
            environment-image="neutral" 
            loading="eager" 
            exposure="1.12" 
            style={{ width: '500px', height: '300px' }}>
            </model-viewer>
        <p className='congratulation'> Congratualtion!</p>
        <p className='captured'> You have captured them all</p>
        <a className='email' href="mailto:andrea.hernan.93@gmail.com">¡¡You win my email!!</a>
    </div>
}