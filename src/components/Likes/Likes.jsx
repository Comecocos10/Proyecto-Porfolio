import React, { useState } from 'react';
import './Likes.css';


function Likes(props) {
    const [counter, setCounter] = useState(0);

    return (
        <div className="Likes">
            <img className='video-like' src={props.videolike}/>
            <h3 className='titulo-like'>{props.titulolike}</h3>
            <div className='navegacion'>
                <svg onClick={() => setCounter(counter === 0 ? props.data.length - 1 : counter - 1)} className='arrow izqui' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 25L4 13L22 1V25Z" fill="black" />
                </svg>
                { 
                    props.data && <div className='change-like'>
                            <p className='text-like'>{props.data[counter].name}</p>
                            <img className='img-like' src={props.data[counter].image} />
                        </div>
                }
                
                <svg onClick={() => setCounter(counter === props.data.length - 1 ? 0 : counter + 1)} className='arrow drcha' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 25L4 13L22 1V25Z" fill="black" />
                </svg>
            </div>
        </div>
    );
}

export default Likes;