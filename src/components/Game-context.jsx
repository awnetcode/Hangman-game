import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const GameContext = createContext();

// eslint-disable-next-line react/prop-types
export const GameProvider = ({ children }) => {
  const [cathegory, setCathegory] = useState('null');
  const [task, setTask] = useState("");
  const [missLeft, setMissLeft] = useState(5);
  const [selectedChar, setSelecdedChar] = useState("");
  const [charMatch, setCharMatch] = useState(false);
  const [guessedChars, setGuessedChars] = useState([]);


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
  

  return (
    <GameContext.Provider value={{
     cathegory, setCathegory,
     task, setTask,
     missLeft, setMissLeft,
     selectedChar, setSelecdedChar,
     charMatch, setCharMatch,
     tryChar, 
     guessedChars
     }}>
      {children}
    </GameContext.Provider>
  );
};
