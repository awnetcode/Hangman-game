import '../styles/password.css';

import { useContext } from 'react';
import { CathegoryContext } from './Game-context';

const Password = () =>{

    const password = useContext(CathegoryContext).task

    const passwordArray = [...password];

    return(
        <>
        <div id="password">
            {passwordArray.map((char, index) =>(
                <span className='task-letter' key={index}>{char}</span>
            ))}
        </div>
        {password}
        </>
    )
}

export default Password