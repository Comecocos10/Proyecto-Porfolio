import React, { useState } from 'react';
import './ux.css';

function Ux(props) {
    const [counter, setCounter] = useState(0);

    return (
        <div className="Sign">
            <svg onClick={() => setCounter(counter === 0 ? props.data.length - 1 : counter - 1)} className='arrowseccion' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="#232A2A" />
            </svg>
            {
                props.data && <div >
                    <section className='change-sign'>
                        <p className='text-sign'>{props.data[counter].name}</p>
                    </section>
                    <section className='info-page'>
                        <div className='paragraf-proyects'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Goal</h4>
                                <p className='text-proyect little2'>{props.data[counter].goal}</p>
                                <h4 className='titel-proyec'>Descripcion</h4>
                                <p className='text-proyect little2'>{props.data[counter].descripcion}</p>
                
                            </section>
                            <img className='img-ux' src={props.data[counter].mvl1} alt="" />
                        </div>
                        <div className='paragraf-proyects long'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Users</h4>
                                <img className='img-ux hriz ' src={props.data[counter].user1} alt="" />
                                <img className='img-ux hriz ' src={props.data[counter].user2} alt="" />
                            </section>
                        </div>
                        <div className='paragraf-proyects'>
                            <img className='img-ux' src={props.data[counter].mvl2} alt="" />
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Requirements</h4>
                                <p className='text-proyect'>{props.data[counter].requeriments}</p>
                                <h4 className='titel-proyec'>Hypotheses</h4>
                                <p className='text-proyect'>{props.data[counter].hypot}</p>
                            </section>
                        </div>
                        <div className='paragraf-proyects'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>User Interaction</h4>
                                <p className='text-proyect little2'>{props.data[counter].interaction}
                                    <br></br>{props.data[counter].interaction2}
                                    <br></br>{props.data[counter].interaction3}
                                    <br></br>{props.data[counter].interaction4}</p>
                            </section>
                            <img className='img-ux' src={props.data[counter].mvl3} alt="" />
                        </div>
                        <div className='paragraf-proyects long'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>User Flow</h4>
                                <img className='img-ux hriz ' src={props.data[counter].flow} alt="" />
                            </section>
                        </div>
                        <div className='paragraf-proyects long'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Link</h4>
                                <a className='link-proyect' href={props.data[counter].link}>¡Check it!</a>
                            </section>
                        </div>
                    </section>
                </div>
            }
            <svg onClick={() => setCounter(counter === props.data.length - 1 ? 0 : counter + 1)} className='arrowseccion drcha-s' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 25L4 13L22 1V25Z" fill="#232A2A" />
            </svg>
        </div>
    );
        

    

}

export default Ux;