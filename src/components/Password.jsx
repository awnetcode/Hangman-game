import '../styles/password.css';

import { useContext } from 'react';
import { GameContext } from './Game-context';

const Password = () =>{

    const password = useContext(GameContext).task
    const passwordArray = [...password];

    //TESTOWO odczyt liter klikniętych na "klawiaturze" w alphabet

    const clickedLetter = useContext(GameContext).selectedChar;
    const charMatch = useContext(GameContext).charMatch;
 
    return(
        <>
        <div id="password">
            {passwordArray.map((char, index) =>(
                <div className="char-container" key={index}>
                    <span className={
                        clickedLetter == char && charMatch == true ? "visible" : "task-char"
                        } key={index}>{char}</span>
                </div>
            ))}
        </div>
        {password}
        <br></br>
        {clickedLetter}
        </>
    )
}

export default Password