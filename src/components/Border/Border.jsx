import React from 'react';
import './Border.css'
import puntos from '../../recursos/Puntos-little.png'
import puntos2 from '../../recursos/Puntos-little2.png'
import puntos3 from '../../recursos/Puntos-little3.png'


export default function Border() {

    return <div className='Borders'>
            
            <div className='BorderOne'>
                <section className='BorderIzq big'></section>
                <section className='lines'>
                    <img className='line' src={puntos} />
                    <img className='line2' src={puntos2} />
                </section>
                <section className='BorderDrc'></section>
            </div>
            <div className='BorderOne'>
                <section className='BorderIzq '></section>
                <section className='lines'>
                    <img className='line' src={puntos} />
                    <img className='line2' src={puntos2} />
                </section>
                <section className='BorderDrc big'></section>
            </div>
            <div className='BorderOne'>
                <section className='BorderIzq big'></section>
                <section className='lines'>
                    <img className='line' src={puntos} />
                    <img className='line2' src={puntos2} />
                </section>
                <section className='BorderDrc'></section>
            </div>
            <div className='BorderOne'>
                <section className='BorderIzq '></section>
                <section className='lines'>
                    <img className='line' src={puntos} />
                    <img className='line2' src={puntos2} />
                </section>
                <section className='BorderDrc big'></section>
            </div>
            <div className='BorderOne'>
                <section className='BorderIzq last-b'></section>
                <section className='lines'>
                    <img className='line' src={puntos} />
                    <img className='line2' src={puntos2} />
                </section>
                <section className='BorderDrc last-b'></section>
            </div>

    </div>

}