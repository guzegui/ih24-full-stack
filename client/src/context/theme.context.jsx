import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper };  
