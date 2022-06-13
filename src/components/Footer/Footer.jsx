import React from 'react';
import './Footer.css';
import RRSS from "./RRSS"
import image from '../../recursos/Logo-little.png'
import ghostInsta from '../../recursos/ghostInsta.png'
import ghostBehance from '../../recursos/ghostBehance.png'
import ghostLinkedi from '../../recursos/ghostLinkedi.png'
import ghostGIT from '../../recursos/ghostGIT.png'


export default function Footer(props) {

    return <footer className="footer">
        <p className='text-rrss'>Conctact me in:</p>
        <div className='footer-icons'>
            <a className="miniLogo" href=""></a>
            <section className='section-rrss'>
                <RRSS
                    link="https://www.instagram.com/menjacaps/?hl=es"
                    ghostrrss={ghostInsta}
                />
                <RRSS
                    link="https://www.behance.net/andreapoveda1"
                    ghostrrss={ghostBehance}
                />
                <RRSS
                    link="https://www.linkedin.com/in/andrea-hernan-1bb6b5166/"
                    ghostrrss={ghostLinkedi}
                />
                <RRSS
                    link="https://github.com/Comecocos10"
                    ghostrrss={ghostGIT}
                />
            </section>

        </div>
        
    
    </footer>;
}
