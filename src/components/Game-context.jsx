import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CathegoryContext = createContext();

// eslint-disable-next-line react/prop-types
export const CathegoryProvider = ({ children }) => {
  const [cathegory, setCathegory] = useState(null);
  const [task, setTask] = useState("");

  return (
    <CathegoryContext.Provider value={{ cathegory, setCathegory, task, setTask }}>
      {children}
    </CathegoryContext.Provider>
  );
};
