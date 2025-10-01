import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  console.log(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Alterar Tema
      </button>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeConsumer() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
