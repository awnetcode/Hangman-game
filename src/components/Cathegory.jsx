import { useState } from 'react';
import '../styles/cathegory.css';
import hamburger from '../assets/hamburger-round-svgrepo-com.svg'


const Cathegory = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <>
        <div id="cathegory">
        <img onClick={toggleMenu} className='hamburger' src={hamburger} alt="" />
        <span>{ isOpen? 'menu-on':'menu-off'}</span>
        <ul  className={`cathegory-list ${isOpen ? "" : "hidden"}`}>
            <li className="cathegory-link">Countries</li>
            <li className="cathegory-link">Movies</li>
            <li className="cathegory-link">Tv Series</li>
            <li className="cathegory-link">Person</li>
        </ul>

        <span className="cathegory-name">Countries</span>
        </div>
        </>
    )
}

export default Cathegory;