import '../styles/password.css';

import { useContext } from 'react';
import { GameContext } from './Game-context';

const Password = () =>{
    const { task, guessedChars } = useContext(GameContext);
    const passwordArray = [...task];
  
    return (
      <>
        <div id="password">
          {passwordArray.map((char, index) => (
            <div className="char-container" key={index}>
              <span className={
                guessedChars.includes(char) ? "visible" : "task-char"
              }>
                {char === " " ? "\u00A0" : char}
              </span>
            </div>
          ))}
        </div>
        {task}
      </>
    );
}

export default Password