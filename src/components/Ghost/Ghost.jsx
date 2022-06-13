import React from 'react';
import Buttom from '../Buttom/Buttom';
import Platform from '../../recursos/Plataforma.png';
import './Ghost.css';
import { Link } from 'react-router-dom';


export default function Ghost(props) {

    return <div className='threeD'>
        <div className="model">
            <model-viewer  
                interpolation-decay="150" 
                bounds="tight" 
                enable-pan 
                src={props.modelo} 
                ar ar-modes="webxr scene-viewer quick-look" 
                camera-controls 
                environment-image="neutral" 
                poster="poster.webp" 
                auto-rotate 
                rotation-per-second="90deg" 
                min-camera-orbit="auto 80deg 4.288m" max-camera-orbit="auto 80deg auto" 
                exposure="1.12" 
                disable-zoom
                style={{width: '200px', height: '200px'}}>
            </model-viewer>
        </div>
        <img className='platform2' src={Platform}/>
        <p className='text-tellyou'>and I tell you {props.about}...</p>
        <Link className='text-decoration' to={props.link}>
            <Buttom 
                text={props.text}
            />  
        </Link> 
    </div>
}