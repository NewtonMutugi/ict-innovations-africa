import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  ThemeOptions,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme as useNextTheme } from "next-themes";
import {
  basedarkTheme,
  baselightTheme,
} from "@/app/admin/dashboard/utilities/theme/DefaultColors";

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: "light",
});

export const useThemeContext = () => useContext(ThemeContext);

const createCustomTheme = (mode: "light" | "dark"): ThemeOptions => {
  const baseTheme = mode === "light" ? baselightTheme : basedarkTheme;
  return {
    ...baseTheme,
    palette: {
      mode,
      ...baseTheme.palette,
    },
  };
};

export const ThemeContextProvider = ({ children }) => {
  const {
    theme: nextTheme,
    setTheme: setNextTheme,
    resolvedTheme,
  } = useNextTheme();
  const [theme, setTheme] = useState<"light" | "dark">(
    resolvedTheme === "light" || resolvedTheme === "dark"
      ? resolvedTheme
      : "light",
  );

  useEffect(() => {
    setTheme(resolvedTheme as "light" | "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setNextTheme(newTheme);
  };

  const muiTheme = useMemo(
    () => createTheme(createCustomTheme(theme)),
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
