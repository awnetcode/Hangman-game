import { createContext, useState, useEffect } from 'react';
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
  const [remainingChars, setRemainingChars] = useState(0);//ile jeszcze do odgadnięcia
  const [score, setScore] = useState(0);//iliść punktów


  // Funkcja porównująca literę z hasłem
  const tryChar = (letter) => {
    setSelecdedChar(letter); // Aktualizuje wybraną literę
    const isMatch = task.includes(letter); // Sprawdza, czy litera jest w zadaniu
    setCharMatch(isMatch); // Aktualizuje stan charMatch

  if (isMatch) {
   // Zlicz wystąpienia litery w haśle
   const matchCount = [...task].filter((char) => char === letter).length;

   // Dodanie litery do odgadniętych, jeśli jeszcze nie jest odgadnięta
   setGuessedChars((prevGuessed) => 
     prevGuessed.includes(letter) ? prevGuessed : [...prevGuessed, letter]
   );

   if (!guessedChars.includes(letter)) {
    setRemainingChars((prevRemaining) => prevRemaining - matchCount * 1);
  }

   // Dodanie odpowiedniej liczby punktów
   setScore((prevScore) => prevScore + matchCount * 10);
 } else {
   // Zmniejszenie liczby pozostałych prób
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

    const taskChars = pickedTask.replace(/ /g, '').split('');
    setRemainingChars(taskChars.length); // Liczba liter pozostałych w haśle w haśle
  };

  
  // Wywołanie newGame przy pierwszym renderze
  useEffect(() => {
    newGame();
  }, []);

  if(remainingChars == 0){
    setScore((prev) => prev + 100)
    newGame();
  } 
    

  
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
     remainingChars, setRemainingChars,
     score, setScore,
     }}>
      {children}
    </GameContext.Provider>
  );
};
