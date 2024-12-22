import '../styles/alphabet.css';
import { useContext } from 'react';
import { GameContext } from './Game-context';

const Alphabet = ()=>{

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { tryChar, markChar, markedChars } = useContext(GameContext);

   const letters = [];
   const polish = "ĄĆĘŁŃÓŚŹŻ";
   const polishArray = [...polish];
   
      polishArray.forEach((char)=>{
         letters.push(char);
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
            <span
             className={`letter ${markedChars.includes(index) ? 'marked' : ''}`}
              key={index}
               onClick={
                  () => {
                     tryChar(letter);
                     markChar(index);
                  } 
                  }>
               {letter}
            </span>
         ))}
         </div>
         </>
     )
}

export default Alphabet;