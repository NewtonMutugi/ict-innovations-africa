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
import { LinearProgress, Box } from "@mui/material";

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: "dark",
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
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    } else {
      // If no theme is stored in localStorage, fall back to Next.js theme resolution
      setTheme(resolvedTheme as "light" | "dark");
    }
  }, []);

  useEffect(() => {
    setNextTheme(theme); // Update next-themes with the current theme
    localStorage.setItem("theme", theme); // Persist the theme to localStorage
  }, [theme, setNextTheme]);

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    } else {
      setTheme(resolvedTheme as "light" | "dark");
    }
    setIsLoading(false); // Once theme is set, stop loading
  }, [resolvedTheme]);

  if (isLoading) {
    // Loading spinner
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
