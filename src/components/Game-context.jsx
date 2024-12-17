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

  return (
    <GameContext.Provider value={{
     cathegory, setCathegory,
     task, setTask,
     missLeft, setMissLeft,
     selectedChar, setSelecdedChar,
     charMatch, setCharMatch 
     }}>
      {children}
    </GameContext.Provider>
  );
};
