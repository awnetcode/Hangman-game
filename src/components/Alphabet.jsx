import '../styles/alphabet.css';



const Alphabet = ()=>{

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
            <span className='letter' key={index}>{letter}</span>
         ))}
         </div>
         </>
     )

}

export default Alphabet;