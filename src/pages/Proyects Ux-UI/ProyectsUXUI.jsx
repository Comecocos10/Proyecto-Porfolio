import React, { useEffect } from 'react';
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
import AboutUser1 from '../../recursos/proyectos/Aboutperson1.png';
import AboutUser2 from '../../recursos/proyectos/Aboutperson2.png';
import AboutFlow from '../../recursos/proyectos/AboutUserflow.png';
import LumvUser1 from '../../recursos/proyectos/Luperson1.png';
import LumvUser2 from '../../recursos/proyectos/Luperson2.png';
import LumvFlow from '../../recursos/proyectos/LuUserflow.png';



function ProyectsUXUI() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const UxUi = [
        {
            name: 'About me',
            mvl1: About,
            mvl2: About2,
            mvl3: About3,
            user1: AboutUser1,
            user2: AboutUser2,
            flow: AboutFlow,
            goal: 'Get more digital presence to increase my visibility.',
            descripcion: 'A digital cover letter, in which I define myself and my skills.',
            requeriments: 'A presentation and see the skills in an easy and differentiating way.',
            hypot: 'By having more presence on the internet, you are more visible and can be more memorable.',
            interaction: '- Enter the page.',
            interaction2: '- Explore the sections of the Skills.',
            interaction3: '- Go to the contact page.',
            interaction4: '- Contact through the given options.',
            link: 'https://frontend.esatid3-2021.com/andreah/projectalpha/master.html',
        },
        {
            name: 'Lü',
            mvl1: Lumvl,
            mvl2: Lumvl2,
            mvl3: Lumvl3,
            user1: LumvUser1,
            user2: LumvUser2,
            flow: LumvFlow,
            goal: 'Create a digital community around our product: Spirulina grower Lü.',
            descripcion: 'A digital community where we provide information about the spirulina algae, its self-cultivation and its forms of consumption.',
            requeriments: 'One blog, one chat, one cookbook and replenish supplies from the same page with no change in experience.',
            hypot: 'It is difficult and expensive to get spirulina for food. Users will see added value and recommend you.',
            interaction: '- Buy the product.',
            interaction2: '- It is reported on the blog. It is advised in the chat. Inspired by the cookbook.',
            interaction3: '- Buy product spare parts and supplies.',
            interaction4: '- A user is created in the community.',
            link: 'https://frontend.esatid3-2021.com/andreah/projectbeta/master.html',
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