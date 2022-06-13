import React from 'react';
import './Photo.css';
import One from '../../recursos/1.png'
import Two from '../../recursos/2.png'
import Three from '../../recursos/3.png'
import Four from '../../recursos/4.png'
import Five from '../../recursos/5.png'
import Animal1 from '../../recursos/photo/Animales-1.jpg'
import Animal2 from '../../recursos/photo/Animales-2.jpg'
import Animal3 from '../../recursos/photo/Animales-3.jpg'
import Animal4 from '../../recursos/photo/Animales-4.jpg'
import Animal5 from '../../recursos/photo/Animales-5.jpg'
import Amsterdam1 from '../../recursos/photo/Amsterdam-1.jpg'
import Amsterdam2 from '../../recursos/photo/Amsterdam-2.jpg'
import Amsterdam3 from '../../recursos/photo/Amsterdam-3.jpg'
import Amsterdam4 from '../../recursos/photo/Amsterdam-4.jpg'
import Amsterdam5 from '../../recursos/photo/Amsterdam-5.jpg'
import Italia1 from '../../recursos/photo/Italia-1.jpg'
import Italia2 from '../../recursos/photo/Italia-2.jpg'
import Italia3 from '../../recursos/photo/Italia-3.jpg'
import Italia4 from '../../recursos/photo/Italia-4.jpg'
import Italia5 from '../../recursos/photo/Italia-5.jpg'
import Italia6 from '../../recursos/photo/Italia-6.jpg'
import Italia7 from '../../recursos/photo/Italia-7.jpg'
import Paisaje1 from '../../recursos/photo/Paisajes-1.jpg'
import Paisaje2 from '../../recursos/photo/Paisajes-2.jpg'
import Paisaje3 from '../../recursos/photo/Paisajes-3.jpg'
import Paisaje4 from '../../recursos/photo/Paisajes-4.jpg'
import Paisaje5 from '../../recursos/photo/Paisajes-5.jpg'
import Paisaje6 from '../../recursos/photo/Paisajes-6.jpg'
import Paisaje7 from '../../recursos/photo/Paisajes-7.jpg'
import Paisaje8 from '../../recursos/photo/Paisajes-8.jpg'
import Render1 from '../../recursos/photo/Render-1.jpg'
import Render2 from '../../recursos/photo/Render-2.jpg'
import Render5 from '../../recursos/photo/Render-5.jpg'
import Render6 from '../../recursos/photo/Render-6.jpg'
import Render7 from '../../recursos/photo/Render-7.jpg'
import Render8 from '../../recursos/photo/Render-8.jpg'
import Render9 from '../../recursos/photo/Render-9.jpg'
import Render10 from '../../recursos/photo/Render-10.jpg'
import Render11 from '../../recursos/photo/Render-11.jpg'
import Render12 from '../../recursos/photo/Render-12.jpg';
import Render13 from '../../recursos/photo/Render-13.jpg';
import SliderPhoto from './SliderPhoto';

function Photo(props) {
    

    const Animal = [
        { photo: Animal1 },
        { photo: Animal2 },
        { photo: Animal3 },
        { photo: Animal4 },
        { photo: Animal5 },
    ];
    const Amsterdam = [
        { photo: Amsterdam1 },
        { photo: Amsterdam2 },
        { photo: Amsterdam3 },
        { photo: Amsterdam4 },
        { photo: Amsterdam5 },
    ];
    const Italia = [
        { photo: Italia1 },
        { photo: Italia2 },
        { photo: Italia3 },
        { photo: Italia4 },
        { photo: Italia5 },
        { photo: Italia6 },
        { photo: Italia7 },
    ];
    const Paisaje = [
        { photo: Paisaje1 },
        { photo: Paisaje2 },
        { photo: Paisaje3 },
        { photo: Paisaje4 },
        { photo: Paisaje5 },
        { photo: Paisaje6 },
        { photo: Paisaje7 },
        { photo: Paisaje8 },
    ];
    const Renders = [
        { photo: Render13 },
        { photo: Render2 },
        { photo: Render5 },
        { photo: Render6 },
        { photo: Render7 },
        { photo: Render8 },
        { photo: Render9 },
        { photo: Render10 },
        { photo: Render11 },
        { photo: Render12 },
        { photo: Render1 },
    ];

    return (
        <div className='Skill-total'>
            <div className='titel-skill'>
                    <img className='numer' src={One} alt="" />
                    <h2 className='titel-text'>Renders</h2>
                </div>
                <div className='Sign-photo'>
                    <SliderPhoto
                        data={Renders}/>
                </div>
            <div className='titel-skill'>
               <img className='numer' src={Two} alt="" />
                <h2 className='titel-text'>Animal</h2>                 
            </div>
            <div className='Sign-photo'>
                <SliderPhoto
                    data={Animal} />
            </div>
            <div className='titel-skill'>
                <img className='numer' src={Three} alt="" />
                <h2 className='titel-text'>Amsterdam</h2>
            </div>
            <div className='Sign-photo'>
                <SliderPhoto
                    data={Amsterdam} />
            </div>
            <div className='titel-skill'>
                <img className='numer' src={Four} alt="" />
                <h2 className='titel-text'>Italia</h2>
            </div>
            <div className='Sign-photo'>
                <SliderPhoto
                    data={Italia} />
            </div>
            <div className='titel-skill'>
                <img className='numer' src={Five} alt="" />
                <h2 className='titel-text'>Paisajes</h2>
            </div>
            <div className='Sign-photo'>
                <SliderPhoto
                    data={Paisaje} />
            </div>
            
        </div>
    );
}

export default Photo;