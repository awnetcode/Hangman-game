import '../styles/alphabet.css';



const Alphabet = ()=>{

    const letters = [];
    //ascii 65-90

    for(let i = 65; i<=90; i++){
       let letter =  String.fromCharCode(i);
       letters.push(letter);
    }

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