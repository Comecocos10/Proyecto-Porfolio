import React from 'react';
import './Skills.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Pinky from '../../recursos/ThreeD/pinky.glb';
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';
import Stickys from '../../info/Stickys/Stickys';
import Photo from '../../info/Photo/Photo';




function Skills() {

    const Skills = [
        { name: 'Skills', type: '' },
        { name: 'Ability', type: 'photo' },
    ];

    return (
        <div className="Skills">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion
                modelo={Pinky}/>
            <SeccionSign
                colorlight="#F1BCE5"
                colordark="#E893D5"/>
            <Stickys
            data={Skills}/>
            <Photo/>
        </div>
    );
}

export default Skills;