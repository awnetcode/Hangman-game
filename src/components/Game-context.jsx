import { createContext, useState, useEffect } from 'react';
import GameData from './Game-data';

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext();

// eslint-disable-next-line react/prop-types
export const GameProvider = ({ children }) => {
  const [category, setCategory] = useState('');//kategoria hasła
  const [polishNameCategory, setPolishNameCategory] = useState('');//kategoria hasła
  const [task, setTask] = useState("");//hasło
  const [missLeft, setMissLeft] = useState(5);//ilość prób
  const [selectedChar, setSelecdedChar] = useState("");//litera zktualnie wybrana z klawiatury alphabet
  const [charMatch, setCharMatch] = useState(false);//true jeśli znajduje się w hasle
  const [guessedChars, setGuessedChars] = useState([]);//odgadnięte litery w haśle
  const [markedChars, setMarkedChars] = useState([]);//zaznaczone litery na klawiaturze alphabet
  const [remainingChars, setRemainingChars] = useState(0);//ile jeszcze do odgadnięcia
  const [score, setScore] = useState(0);//ilość punktów


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

 
  
  const newGame = (forcedCategory = null) => {
    const categoryToUse = forcedCategory || GameData.categories[Math.floor(Math.random() * GameData.categories.length)].name;
  
    const categoryObj = GameData.categories.find(cat => cat.name === categoryToUse);
    const pickedTask = categoryObj.tasks[Math.floor(Math.random() * categoryObj.tasks.length)];
  
    setCategory(categoryToUse);
    setTask(pickedTask);
    setMissLeft(5);
    setMarkedChars([]);
    setGuessedChars([]);
    setRemainingChars(pickedTask.replace(/ /g, '').length);
  
    // Bezpieczniej od razu przetłumaczyć
    switch(categoryToUse){
      case 'Countries': setPolishNameCategory('Kraj'); break;
      case 'Movies': setPolishNameCategory('Film'); break;
      case 'Tv Series': setPolishNameCategory('Serial'); break;
      case 'Person': setPolishNameCategory('Osoba'); break;
    }
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
     category, setCategory,
     polishNameCategory,setPolishNameCategory,
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
