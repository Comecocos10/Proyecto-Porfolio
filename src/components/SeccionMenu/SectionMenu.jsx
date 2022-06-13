import React from 'react';
import { Link } from 'react-router-dom';
import './SectionMenu.css';

export default function SectionMenu(props) {

    return <div className='section-menu'>
                <Link className='link-ghost-menu' to={props.link}>
                    <img className="ghost-menu" src={props.image} />
                    <p className='text-ghost-menu'>{props.titelMenu}</p>
                </Link>

            </div>
}