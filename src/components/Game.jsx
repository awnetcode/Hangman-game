import { useEffect, useContext } from 'react';
import { GameContext } from './Game-context.jsx';
import GameData from './Game-data.jsx';

const Game = () => {
  const { setCathegory, setTask } = useContext(GameContext);

  const clickedLetter = useContext(GameContext).selectedChar;
  const charMatch = useContext(GameContext).charMatch;

  //funkcja porównująca litery z hasłem wywołana onclick na klawiszach w alphabet
   const tryChar = () =>{

  }

  useEffect(() => {
    const cathegoryIndex = Math.floor(Math.random() * GameData.cathegories.length);
    const pickedCathegory = GameData.cathegories[cathegoryIndex].name;

    const taskIndex = Math.floor(Math.random() * GameData.cathegories[cathegoryIndex].tasks.length);
    const pickedTask = GameData.cathegories[cathegoryIndex].tasks[taskIndex];

    setCathegory(pickedCathegory);
    setTask(pickedTask);
  }, [setCathegory, setTask]);

  // Nic nie renderujemy
  return null;
};

export default Game;
