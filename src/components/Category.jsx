import { useContext,useState } from 'react';
import { GameContext } from './Game-context';
import '../styles/category.css';


import hamburger from '../assets/hamburger-round-svgrepo-com.svg'
import play from '../assets/play-icon.svg'


const Category = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const { newGame } = useContext(GameContext);

    //const category = useContext(GameContext).category;
    const polishNamecathegory = useContext(GameContext).polishNameCategory;
//    const changeCategory = useContext(GameContext).setCategory;

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <>
        <div id="category">
        <img onClick={toggleMenu} className='hamburger' src={hamburger} alt="hamburger menu icon" />
        <ul  className={`category-list ${isOpen ? "" : "hidden"}`}>
           <li className='category-link' onClick={() => newGame('Movies')}>Film</li>
           <li className='category-link' onClick={() => newGame('Tv Series')}>Serial</li>
           <li className='category-link' onClick={() => newGame('Countries')}>Kraj</li>
           <li className='category-link' onClick={() => newGame('Person')}>Osoba</li>
        </ul>

        <span className="category-name" >{ polishNamecathegory || "loading..."}</span>
        </div>
        <div className="play-button">
          <img src={play} alt="play icon" onClick={() => newGame()}/>
          Zagraj znowu
        </div>
        </>
    )
}

export default Category;