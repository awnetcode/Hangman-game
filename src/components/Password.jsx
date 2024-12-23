import '../styles/password.css';

import { useContext } from 'react';
import { GameContext } from './Game-context';

const Password = () =>{
    const { task, guessedChars, remainingChars } = useContext(GameContext);
    const passwordArray = task.split(" ");
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
            {task}<br/>
            {remainingChars}
        </div>
      </>
    );
}

export default Password