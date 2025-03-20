import '../styles/counter.css';

import { useContext } from 'react';
import { GameContext } from './Game-context';

import heart from '../assets/heart.svg';
import heartPulse from '../assets/heart-pulse.svg';

const Counter = () =>{
    const missLeft = useContext(GameContext).missLeft;

    //TESTOWO: do usunięcia razem z onclickiem na heart
    const changeMissLeft = useContext(GameContext).setMissLeft;
    const score = useContext(GameContext).score;

    return(
        <>
        <div id="counter">
            <div className="score">WYNIK: {score}</div>
            <div className="life-bar">
                        {/* Stworzy wewnątrz life-bar tyle divów life-bar-step ile wynosi missLeft */}
                        {Array.from({ length: missLeft }).map((_, index) => (
                        <div key={index} className="life-bar-step"></div>
                    ))}
            </div>   
            <img src={missLeft > 2 ? heart : heartPulse} className="heart" onClick={() => changeMissLeft(missLeft - 1)}></img>
        </div>
        </>
    )   
}

export default Counter;