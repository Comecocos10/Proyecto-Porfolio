import React from 'react';
import './Description.css';


function Description(props) {
    return (
        <div className="Description">
            <h1 className='titel-iam'>I'm...</h1>
            <div className='paragraf-iam'>
                <p className='text-iam little'>I'm Andrea Hernán, a Valencian empathic UX Designer and Researcher, and chameleonic Product Designer. Since 10 years ago, I knew that my vocation was to create “something” that would facilitate or help people in their day to day.</p>
                <img className='img-iam' src={props.cat} alt="" />            
            </div>
            <div className='paragraf-iam'>
                <p className='text-iam '  >Furthermore, I’m curious like the cat that died of curiosity, punctual as if time was gold, so organized that I find the needle in the haystack and avid to learn, because knowledge does not take place. </p>
            </div>
            <div className='paragraf-iam'>
                <img className='img-iam' src={props.dino} alt="" />
                <p className='text-iam little' >My perfect user experience is: Time with my dog and my family, a beer with friends, a video game session, and humour (especially silly humour). I define myself as a literature lover, an art groupie, a photography hobbyist and a dinosaur's fan.</p>
            </div>
        </div>
    );
}

export default Description;