import React from 'react';
import './ProyectsUXUI.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Inky from '../../recursos/ThreeD/inky.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';
import UX from '../../info/UX/Ux';
import About from '../../recursos/proyectos/About1.png';
import About2 from '../../recursos/proyectos/About2.png';
import About3 from '../../recursos/proyectos/About3.png';
import Lumvl from '../../recursos/proyectos/LuX1.png';
import Lumvl2 from '../../recursos/proyectos/LuX2.png';
import Lumvl3 from '../../recursos/proyectos/LuX3.png';


function ProyectsUXUI() {

    const UxUi = [
        {
            name: 'About me',
            mvl1: About,
            mvl2: About2,
            mvl3: About3,
        },
        {
            name: 'Lü',
            mvl1: Lumvl,
            mvl2: Lumvl2,
            mvl3: Lumvl3,
        },

    ];

    return (
        <div className="ProyectsUXUI">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion 
                modelo={Inky} />
            <SeccionSign
                colorlight="#8DD2E8"
                colordark="#38B1D7"
                />
            <UX
            data={UxUi}/>

        </div>
    );
}

export default ProyectsUXUI;