 import { useContext } from "react";
 import { GameContext } from "./Game-context";

const WinGame = () =>{

     const { remainingChars, setRemainingChars } = useContext(GameContext);
     console.log(remainingChars);

    if (remainingChars == 0 ){
        setRemainingChars(0);
        return(
            <>
            <div className="game-win">
                 Brawo!
            </div>
            </>
        )
   }

}

export default WinGame;