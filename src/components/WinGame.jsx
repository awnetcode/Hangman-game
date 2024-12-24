 import { useContext } from "react";
 import { GameContext } from "./Game-context";

const WinGame = () =>{

     const { remainingChars, setRemainingChars } = useContext(GameContext);
     console.log(remainingChars);

    if (remainingChars == 0 ){
        setRemainingChars(0);
        console.log('żyje!')
        return(
            <>
            <div className="game-win">
                LOLWUT
            </div>
            </>
        )
   }

}

export default WinGame;