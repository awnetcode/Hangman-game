import { createContext, useState } from 'react';
import GameData from './Game-data';

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext();

// eslint-disable-next-line react/prop-types
export const GameProvider = ({ children }) => {
  const [cathegory, setCathegory] = useState('null');//kategoria hasła
  const [task, setTask] = useState("");//hasło
  const [missLeft, setMissLeft] = useState(5);//ilość prób
  const [selectedChar, setSelecdedChar] = useState("");//litera zktualnie wybrana z klawiatury alphabet
  const [charMatch, setCharMatch] = useState(false);//true jeśli znajduje się w hasle
  const [guessedChars, setGuessedChars] = useState([]);//odgadnięte litery w haśle
  const [markedChars, setMarkedChars] = useState([]);//zaznaczone litery na klawiaturze alphabet
  const [leftToGuess, setLeftToGuess] = useState(0);//ile jeszcze do odgadnięcia


  // Funkcja porównująca literę z hasłem
  const tryChar = (letter) => {
    setSelecdedChar(letter); // Aktualizuje wybraną literę
    const isMatch = task.includes(letter); // Sprawdza, czy litera jest w zadaniu
    setCharMatch(isMatch); // Aktualizuje stan charMatch

  if (isMatch) {
    setGuessedChars((prevGuessed) => 
      prevGuessed.includes(letter) ? prevGuessed : [...prevGuessed, letter]
    
    );
  } else {
    setMissLeft((prevMissLeft) => prevMissLeft - 1);
  }
  };

  const markChar = (index) =>{
    setMarkedChars((prev) => [...prev, index]);
  }
  
  const newGame = () => {
    const cathegoryIndex = Math.floor(Math.random() * GameData.cathegories.length);
    const pickedCathegory = GameData.cathegories[cathegoryIndex].name;
  
    const taskIndex = Math.floor(Math.random() * GameData.cathegories[cathegoryIndex].tasks.length);
    const pickedTask = GameData.cathegories[cathegoryIndex].tasks[taskIndex];
  
    setCathegory(pickedCathegory);
    setTask(pickedTask);
    setMissLeft(5);
    setMarkedChars([]);
    setGuessedChars([]);
    setLeftToGuess(task.length);
  };
  

  return (
    <GameContext.Provider value={{
     cathegory, setCathegory,
     task, setTask,
     missLeft, setMissLeft,
     selectedChar, setSelecdedChar,
     charMatch, setCharMatch,
     tryChar, 
     markChar,
     newGame,
     guessedChars,
     markedChars,
     leftToGuess
     }}>
      {children}
    </GameContext.Provider>
  );
};
