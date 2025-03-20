import '../styles/header.css';

import Category from './Category';
import Counter from './Counter';

const Header = () =>{
    return(
        <>
        <header className="page-header">
            <Category />
            <Counter />
        </header>
        </>
    )
}

export default Header;