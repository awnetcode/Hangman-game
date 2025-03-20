import { useContext,useState } from 'react';
import { GameContext } from './Game-context';
import '../styles/category.css';


import hamburger from '../assets/hamburger-round-svgrepo-com.svg'
import play from '../assets/play-icon.svg'


const Category = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const { newGame } = useContext(GameContext);

    const category = useContext(GameContext).category;
    //const polishNamecathegory = useContext(GameContext.polishNamecathegory);
    const changeCategory = useContext(GameContext).setCategory;

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <>
        <div id="category">
        <img onClick={toggleMenu} className='hamburger' src={hamburger} alt="hamburger menu icon" />
        <ul  className={`category-list ${isOpen ? "" : "hidden"}`}>
            <li className="category-link" onClick={() => {
               changeCategory('Movie');
               newGame();
            } }>Film</li>
            <li className="category-link" onClick={() => changeCategory('Tv Serie')}>Serial</li>
            <li className="category-link" onClick={() => changeCategory('Country')}>Kraj</li>
            <li className="category-link" onClick={() => changeCategory('Person')}>Osoba</li>
        </ul>

        <span className="category-name" >{ category || "loading..."}</span>
        </div>
        <div className="play-button">
          <img src={play} alt="play icon" onClick={() => newGame()}/>
          Zagraj znowu
        </div>
        </>
    )
}

export default Category;