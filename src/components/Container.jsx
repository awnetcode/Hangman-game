import '../styles/container.css';

import { CathegoryProvider } from './Game-context.jsx';
import Game from './Game.jsx';

import Alphabet from './Alphabet';
import Header from './Header';
import Password from './Password.jsx';

const Container = () =>{
    return(
        <CathegoryProvider>
           <Game />
           <Header />
           <Password />
           <Alphabet />
        </CathegoryProvider>
    )
}

export default Container;