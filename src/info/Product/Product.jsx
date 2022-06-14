import React, { useState } from 'react';
import './product.css';


function Product(props) {
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
                    </section >
                    <section className='info-page'>
                        <div className='paragraf-proyects'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Briefing</h4>
                                <p className='text-proyect little2'>{props.data[counter].briefing}</p>
                            </section>
                            <img className='img-product' src={props.data[counter].photoprin} alt="" />
                        </div>
                        <div className='paragraf-proyects long'>
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Mision</h4>
                                <p className='text-proyect'>{props.data[counter].MYV}</p>
                            </section>
                        </div>
                        <div className='paragraf-proyects'>
                            <img className='img-product' src={props.data[counter].photodetail} alt="" />
                            <section className='seccion-proycts'>
                                <h4 className='titel-proyec'>Users</h4>
                                <p className='text-proyect little2'>{props.data[counter].user}</p>
                                <h4 className='titel-proyec'>Material</h4>
                                <p className='text-proyect little2'>{props.data[counter].material}</p>
                            </section>
                        </div>
                        <div className='paragraf-proyects long'>
                            <div className='colum-proyect'>
                                <section className='seccion-proycts'>
                                    <h4 className='titel-proyec'>Product</h4>
                                    <p className='text-proyect'>{props.data[counter].conclusion}</p>
                                </section>
                                <img className='img-product horz' src={props.data[counter].photofin} alt="" />
                            </div>
                            
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

export default Product;