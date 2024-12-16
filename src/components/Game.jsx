import { useEffect, useContext } from 'react';
import { CathegoryContext } from './Game-context.jsx';
import GameData from './Game-data.jsx';

const Game = () => {
  const { setCathegory, setTask } = useContext(CathegoryContext);

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
