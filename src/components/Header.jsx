import '../styles/header.css';

import Cathegory from './Cathegory';
import Counter from './Counter';

const Header = () =>{
    return(
        <>
        <header className="page-header">
            <Cathegory />
            <Counter />
        </header>
        </>
    )
}

export default Header;