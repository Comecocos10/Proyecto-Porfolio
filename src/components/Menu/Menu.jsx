import React, { useState } from 'react';
import SectionMenu from '../SeccionMenu/SectionMenu';
import './Menu.css';
import ghost from '../../recursos/ghost.png'
import ghost1 from '../../recursos/ghost2.png'
import ghost2 from '../../recursos/ghost3.png'
import ghost3 from '../../recursos/ghost4.png'
import ghost4 from '../../recursos/ghost5.png'

export default function Menu(props) {    
        
    const [isOpened, setIsOpened] = useState(false);

    function showMenu() {
        setIsOpened(!isOpened);
    }
    
    return  <div className='total-menu'>
        <button className='menu' onClick={showMenu}>
            <p className='text-menu'> MENU </p>
        </button>
        {isOpened === true ? <section className='menu-open'>
            <SectionMenu
                image={ghost}
                titelMenu="About Me"
                link='/about'
            />
            <SectionMenu
                image={ghost1}
                titelMenu="Proyects Ux-Ui"
                link='/proyectsUXUI'
            />
            <SectionMenu
                image={ghost2}
                titelMenu="Proyects Product"
                link='/proyects-product'
            />
            <SectionMenu
                image={ghost3}
                titelMenu="Skills"
                link='/skills'
            />
            <SectionMenu
                image={ghost4}
                titelMenu="Trajectory"
                link='/trajectory'
            />
        </section> : ''}
    </div>
    
    
}







