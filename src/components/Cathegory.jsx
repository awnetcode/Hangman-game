import { useContext,useState } from 'react';
import { GameContext } from './Game-context';
import '../styles/cathegory.css';


import hamburger from '../assets/hamburger-round-svgrepo-com.svg'
import play from '../assets/play-icon.svg'



const Cathegory = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const { newGame } = useContext(GameContext);

    const cathegory = useContext(GameContext).cathegory;
    const changeCathegory = useContext(GameContext).setCathegory;

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <>
        <div id="cathegory">
        <img onClick={toggleMenu} className='hamburger' src={hamburger} alt="hamburger menu icon" />
        <ul  className={`cathegory-list ${isOpen ? "" : "hidden"}`}>
            <li className="cathegory-link" onClick={() => changeCathegory('Movie')}>Movies</li>
            <li className="cathegory-link" onClick={() => changeCathegory('Tv Serie')}>Tv Series</li>
            <li className="cathegory-link" onClick={() => changeCathegory('Country')}>Countries</li>
            <li className="cathegory-link" onClick={() => changeCathegory('Person')}>Person</li>
        </ul>

        <span className="cathegory-name" >{cathegory || "loading..."}</span>
        </div>
        <div className="play-button">
          <img src={play} alt="play icon" onClick={() => newGame()}/>
          Play again
        </div>
        </>
    )
}

export default Cathegory;