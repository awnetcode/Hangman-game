import '../styles/container.css';

import { GameProvider } from './Game-context.jsx';

import Alphabet from './Alphabet';
import Header from './Header';
import Password from './Password.jsx';
import WinGame from './WinGame.jsx';
const Container = () =>{
    return(
        <GameProvider>
           <WinGame />
           <Header />
           <Password />
           <Alphabet />
        </GameProvider>
    )
}

export default Container;