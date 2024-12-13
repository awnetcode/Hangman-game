import '../styles/alphabet.css';

import { useContext } from 'react';
import { GameContext } from './Game-context';

const Alphabet = ()=>{

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const checkLetter = useContext(GameContext).setSelecdedChar;
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const markLetter = useContext(GameContext).setCharMatch;

   const letters = [];
   const polish = "ĄĆĘŃÓŚŹŻ";
   const polishArray = [...polish];
   
      polishArray.forEach((asc)=>{
         letters.push(asc);
      }) 
     
      //ascii 65-90 
   for(let i = 65; i<=90; i++){
      let letter =  String.fromCharCode(i);
      letters.push(letter);
   }

       letters.sort((a,b) => a.localeCompare(b));

     return(
         <>
         <div id="alphabet">
         {letters.map((letter, index) => (
            <span className='letter' key={index} onClick={() => {
               checkLetter(letter);
               markLetter(true);
            } }>{letter}</span>
         ))}
         </div>
         </>
     )

}

export default Alphabet;