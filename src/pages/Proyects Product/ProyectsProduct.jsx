import React from 'react';
import './ProjectsProduct.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Blnky from '../../recursos/ThreeD/blinky.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';
import Product from '../../info/Product/Product';


function ProjectsProduct(props) {
    const Products = [
        {name: 'Lü'},
        {name: 'Grefusa' },
        {name: 'Interactive park' },
        {name: 'Bathroom Aqua' },
        
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
                data={Products}/>
        </div>
    );
}

export default ProjectsProduct;