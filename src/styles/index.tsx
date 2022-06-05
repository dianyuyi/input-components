import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: object;
      secondary: object;
      mode: string;
    };
    typography: {
      fontFamily: string;
    };
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
    fontFamily?: string;
    MuiPickersToolbar?: {
      fontSize?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00A3FF',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: '"Ubuntu", "Inter", sans-serif',
  },
});

interface Props {
  children: React.ReactNode;
}
export const Palette: React.FC<Props> = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
