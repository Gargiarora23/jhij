import React from 'react'
import './A.css';

import { Link } from 'react-router-dom';
export const MainLink = () => {
    return (
        <>
            <div className='ll'>
                <div className='first'>
                    <ul className='bb'>
                        <li>
                            {/* <Link to='/Reactlink'>Reactlink</Link>
                            <Link to='/Reactjs'>Reactjs</Link>
                            <Link to='/Virtualdom'>Virtualdom</Link>
                            <Link to='/Props'>Props</Link>
                            <Link to='/Rctcomponent'>Rctcomponent</Link> */}
                             <Link to='/Navbar'>Navbar</Link>
                            <Link to='/Brainwave'>Brainwave</Link>
                            <Link to='/Demos'>Demos</Link>
                            <Link to='/Pages'>Pages</Link>
                            <Link to='/Support'>Support</Link>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
