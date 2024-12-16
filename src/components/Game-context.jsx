import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CathegoryContext = createContext();

// eslint-disable-next-line react/prop-types
export const CathegoryProvider = ({ children }) => {
  const [cathegory, setCathegory] = useState('null');
  const [task, setTask] = useState("");
  const [missLeft, setMissLeft] = useState(5);

  return (
    <CathegoryContext.Provider value={{
     cathegory, setCathegory,
     task, setTask,
     missLeft, setMissLeft 
     }}>
      {children}
    </CathegoryContext.Provider>
  );
};
