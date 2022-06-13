import React from 'react';
import './Me.css';
import Platform from '../../recursos/Plataforma.png';
import Modelo from '../../recursos/ThreeD/Me.glb'
import Buttom from '../Buttom/Buttom';
import { Link } from 'react-router-dom';

export default function Me(props) {
    
    return <div className='threeDMe'>
        <div className="model">
            <model-viewer 
                bounds="tight" 
                enable-pan 
                src={Modelo} 
                ar ar-modes="webxr scene-viewer quick-look" 
                camera-controls 
                environment-image="neutral" 
                auto-rotate 
                rotation-per-second="90deg" 
                min-camera-orbit="auto 90deg 4.288m" 
                max-camera-orbit="auto 90deg auto" min-field-of-view="30deg" 
                exposure="1.12" 
                disable-zoom
                style={{ width: '200px', height: '200px' }}>

            </model-viewer>
        </div>
        <img className='platform' src={Platform} />
        <p className='text-tellyou'>and I tell you {props.about}...</p>
        <Link className='text-decoration' to='/about'>
            <Buttom
                text="About me"
            />
        </Link>
        
    </div>
}