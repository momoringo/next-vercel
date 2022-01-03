declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      third: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      third?: string;
    };
  }
}