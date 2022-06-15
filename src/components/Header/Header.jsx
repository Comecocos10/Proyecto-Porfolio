import React from 'react';
import './Header.css';
import Menu from "../Menu/Menu"
import image from '../../recursos/Logo-little.png'
import { Link } from 'react-router-dom';


export default function Header(props) {

    return <header className="header">
           <Link className='text-decoration' to='/'>
                <button className="miniLogo">
                </button>
            </Link>
            
            <Menu/> 
        
    </header>;
}