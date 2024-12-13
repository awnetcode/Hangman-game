import '../styles/counter.css';
import '../assets/heart.svg';

const Counter = () =>{

    const heart = new Image();
    heart.src = '../assets/heart.svg';
    heart.height = 30;

    console.log(heart);

    return(
        <>
        <div id="counter">
            <div className="life-bar"></div>
            
            <img src={heart.src} className="heart"></img>
        </div>
        </>
    )

    
}

export default Counter;