import React, { useEffect } from 'react';
import './Skills.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Pinky from '../../recursos/ThreeD/pinky.glb';
import { Link } from 'react-router-dom';
import SeccionSign3 from '../../components/SeccionSign/SeccionSign3';
import Stickys from '../../info/Stickys/Stickys';
import Photo from '../../info/Photo/Photo';





function Skills() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const SkillList = [
        {
            type: 'sticky',
            name: 'Skills'
        },
        {
            type: 'photo',
            name: 'Ability'
        }
    ];

    return (
        <div className="Skills">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion
                modelo={Pinky}/>
            <SeccionSign3
                colorlight="#F1BCE5"
                colordark="#E893D5"
                data={SkillList}
                />

        </div>
        
    );
}

export default Skills;