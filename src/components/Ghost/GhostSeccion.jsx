import React, { useState, useEffect } from 'react';
import './GhostSeccion.css';


export default function GhostSeccion(props) {

    const [cameraOrbit, setCameraOrbit] = useState(0);
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const isLeft = event.clientX < window.innerWidth / 2;
            setCameraOrbit(isLeft ? 30 : -50);
    })
    }, []);
    

    return <div className='threeDseccion '>
            <div className="model-seccion">
                <model-viewer
                    interpolation-decay="100" 
                    src={props.modelo} 
                    camera-orbit={cameraOrbit + 'deg'}
                    ar ar-modes="webxr scene-viewer quick-look" 
                    environment-image="neutral" 
                    exposure="1.12"
                    style={{ width: '225px', height: '225px' }}>
                </model-viewer>
            </div> 
        </div>
}