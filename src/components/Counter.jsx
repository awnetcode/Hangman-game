import '../styles/counter.css';
import heart from '../assets/heart.svg';

import { useState } from 'react';
//import heartPulse from '../assets/heart-pulse.svg';

const Counter = () =>{

    // eslint-disable-next-line no-unused-vars
       const [missLeft, setMissLeft] = useState(4);

    return(
        <>
        <div id="counter">
            <div className="life-bar">
                        {/* Stworzy wewnątrz life-bar tyle divów life-bar-step ile wynosi missLeft */}
                        {Array.from({ length: missLeft }).map((_, index) => (
                        <div key={index} className="life-bar-step"></div>
                    ))}
            </div>   
            <img src={heart} className="heart"></img>
        </div>
        </>
    )

    
}

export default Counter;