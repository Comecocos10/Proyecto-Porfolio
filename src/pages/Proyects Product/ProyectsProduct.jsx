import React from 'react';
import './ProjectsProduct.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Blnky from '../../recursos/ThreeD/blinky.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';
import Product from '../../info/Product/Product';
import Lu from '../../recursos/proyectos/Lu-1.png';
import Lu2 from '../../recursos/proyectos/Lu-2.png';
import Lu3 from '../../recursos/proyectos/Lu-3.jpg';
import Grefu from '../../recursos/proyectos/Grefusa-1.png';
import Grefu2 from '../../recursos/proyectos/Grefusa-2.png';
import Grefu3 from '../../recursos/proyectos/Grefusa-3.jpg';
import PInte from '../../recursos/proyectos/PInter-1.png';
import PInte2 from '../../recursos/proyectos/PInter-2.png';
import PInte3 from '../../recursos/proyectos/PInter-3.png';
import Aqua from '../../recursos/proyectos/Aqua-1.png';
import Aqua2 from '../../recursos/proyectos/Aqua-2.png';
import Aqua3 from '../../recursos/proyectos/Aqua-3.jpg';

function ProjectsProduct(props) {
    const Products = [
        {   name: 'Lü', 
            briefing: 'Change the way we feed ourselves using a self-cultivation system of algae.',
            MYV: 'Rethink the way we feed with a more sustainable system, with the cultivation of healthy food.',
            user:'Athletes and Vegetarians',
            material:'Glass, Cardboard and Polystyrene.',
            conclusion: 'Lü is a grower of Spirulina algae for the home. Ideal for the kitchen; It also has a careful aesthetic to make it attractive and is accompanied by informative material on the algae and the grower.',
            photoprin: Lu,
            photodetail: Lu2,
            photofin: Lu3,
        },
        {   name: 'Grefusa',
            briefing: 'A Pack of Pipes, which is both a container and a shell collector, to be able to consume pipes in a more sustainable way.',
            MYV: 'Continue innovating nuts and cereal snacks that are chosen by consumers to savor it, their leisure time.',
            user: 'Consumers of any kind of PipasG',
            material: 'Poly-lactic acid and Silicone.',
            conclusion: 'It is a redesign of the Pipas G container, adding the functionality of a shell container and closure systems to prevent the content coming out. A simple, easy and actionable container with one hand.',
            photoprin: Grefu,
            photodetail: Grefu2,
            photofin: Grefu3,
        },
        {   name: 'Interactive park',
            briefing: 'A safe playground for children. Activating them both physically and mentally and generating a relaxing atmosphere at the end.',
            MYV: 'Produce a gaming experience that is educational and stimulating.',
            user: 'Children from 3 to 7 years old.',
            material: 'Polyester resin and fiberglass.',
            conclusion: 'It is a covered park with 3 play areas distributed as follows: The first contains mental games, the second physical games and the third is an area to promote tranquility and care for the environment, through holograms and devices.',
            photoprin: PInte,
            photodetail: PInte2,
            photofin: PInte3,  
        },
        {   name: 'Bathroom Aqua',
            briefing: 'A set of bathroom elements with a particular theme.',
            MYV: 'Decorate your rooms with their own essence so that you feel comfortable.',
            user: 'Lovers of nature and design.',
            material: 'Polycarbonate and stainless steel',
            conclusion: 'They are a set of bathroom elements inspired by water, since it is the main element of the room, and in its different states: solid, gaseous and liquid. Inspired by organic forms of water, such as the drop or the cloud.',
            photoprin: Aqua,
            photodetail: Aqua2,
            photofin: Aqua3, 
        },
        
    ];

    return (
        <div className="ProjectsProduct">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion 
                modelo={Blnky} />
            <SeccionSign
                colorlight="#E78E8E"
                colordark="#D43A3A"
                />
            <Product
                data={Products}
                img={Products}
                />
        </div>
    );
}

export default ProjectsProduct;