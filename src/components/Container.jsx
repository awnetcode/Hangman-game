import '../styles/container.css';

import { GameProvider } from './Game-context.jsx';
import Game from './Game.jsx';

import Alphabet from './Alphabet';
import Header from './Header';
import Password from './Password.jsx';

const Container = () =>{
    return(
        <GameProvider>
           <Game />
           <Header />
           <Password />
           <Alphabet />
        </GameProvider>
    )
}

export default Container;