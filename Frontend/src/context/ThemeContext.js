import { useState, createContext, useContext } from "react";

//custom hook creation

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook export
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
