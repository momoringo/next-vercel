import { Theme, ThemeOptions } from "'@mui/material/styles";


declare module "@mui/material/styles" {
  interface Palette {
    third: Palette["primary"];
  }
  interface PaletteOptions {
    third?: PaletteOptions["primary"];
  }
}

