import React, {useState} from 'react';
import './SeccionSign.css';
import Product from '../../info/Product/Product';
import Ux from '../../info/UX/Ux';
import Stickys from '../../info/Stickys/Stickys';
import Photo from '../../info/Photo/Photo';




function SeccionSign(props) {

    /*const [pages, diffProps] = useEffect(() => {props.data[counter].type });
    
    {function mierda() {
                              if (pages = 'photo'){return (<Photo></Photo>)}
                            else if (pages = 'product') {return (<Product></Product>)}
                            else if (pages = 'ux') {return (<Ux></Ux>)}
                            else (pages = 'sticky') {return (<Stickys></Stickys>)} => ();}}-->*/
    
    return (
        <div className="Sign1">
            <div className='fondo-sign'>
                <svg width="295" height="105" viewBox="0 0 578 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.607 234H11V161.683V89.366L86.9098 10H578V171.865L502.607 234Z" fill={props.colorlight} />
                    <path d="M476 214.5H0V145.25V76L73.5 0H549V155L476 214.5Z" fill={props.colordark} />
                    <path d="M463 193.5H29.5V142.738V89.1575L92.4235 24.3183H525.495V142.738L463 193.5Z" fill={props.colordark} stroke={props.colorlight} stroke-width="6" />
                </svg>
            </div>

        </div>
    );
}

export default SeccionSign;