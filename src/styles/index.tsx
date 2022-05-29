import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: object;
      secondary: object;
      mode: string;
    };
    typography: {
      fontFamily: string
    }
  }
  // 允许配置文件使用 `createTheme`
  interface ThemeOptions {
    primary?: {
      main: string;
    };
    secondary?: {
      main: string;
    };
    mode?: string;
    fontFamily?: string
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00A3FF",
    },
    secondary: {
      main: green[500],
    },
    mode: "dark",
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif"
  }
});


interface Props {
  children: React.ReactNode;
}
export const Palette:React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
