import '../styles/password.css';

import { useContext } from 'react';
import { GameContext } from './Game-context';

const Password = () =>{
    const { task, guessedChars, missLeft } = useContext(GameContext);
    const passwordArray = task.split(" ");

    if(missLeft >0){
        return (
            <>
              <div id="password">
                  {passwordArray.map((word, wordIndex) => (
                      <div className="word-container" key={wordIndex}>
                          {[...word].map((char, charIndex) => (
                              <div className="char-container" key={charIndex}>
                                  <span
                                      className={
                                          guessedChars.includes(char) ? "char-visible" : "task-char"
                                      }
                                  >
                                      {char}
                                  </span>
                              </div>
                          ))}
                      </div>
                  ))}
              </div>
            </>
          );
    }else{
        return(
            <div className="lose-hint">
                {task}
            </div>
        )
    }
 
}

export default Password