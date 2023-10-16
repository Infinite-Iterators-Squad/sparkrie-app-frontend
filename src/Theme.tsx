import { experimental_extendTheme as materialExtendTheme } from "@mui/material/styles";
import { extendTheme as joyExtendTheme, PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    secondary: true;
  }

  interface Palette {
    // this will make the node `secondary` configurable in `extendTheme`
    // and add `secondary` to the theme's palette.
    secondary: PaletteRange;
  }
}

export const primaryMain = "#5D42BD";
export const secondaryMain = "#D7BDFD";
export const backgroundMain = "#F2F4F5";
export const special = "#fcd965";

export const themeStyle = materialExtendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          700: primaryMain,
          main: primaryMain,
        },
        secondary: {
          700: secondaryMain,
          main: secondaryMain,
        },
      },
    },
    //TODO: Dark Mode
  },
  typography: {
    fontFamily: "DM Sans",
    subtitle1: {
      fontSize: 24,
      fontWeight: 700,
      fontStyle: "normal",
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 700,
      fontStyle: "normal",
    },
    body1: {
      fontSize: 20,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          background: "#fff",
          boxShadow: "4px 6px 40px 0px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export const joyTheme = joyExtendTheme({
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          50: backgroundMain,
          100: backgroundMain,
          200: backgroundMain,
          300: secondaryMain,
          400: secondaryMain,
          500: secondaryMain,
          600: secondaryMain,
          700: secondaryMain,
          800: secondaryMain,
          900: secondaryMain,
          solidBg: "var(--joy-palette-secondary-400)",
          solidActiveBg: "var(--joy-palette-secondary-500)",
          outlinedBorder: "var(--joy-palette-secondary-500)",
          outlinedColor: "var(--joy-palette-secondary-700)",
          outlinedActiveBg: "var(--joy-palette-secondary-100)",
          softColor: "var(--joy-palette-secondary-800)",
          softBg: "var(--joy-palette-secondary-200)",
          softActiveBg: "var(--joy-palette-secondary-300)",
          plainColor: "var(--joy-palette-secondary-700)",
          plainActiveBg: "var(--joy-palette-secondary-100)",
        },
        neutral: {
          mainChannel: secondaryMain,
        },
        background: {
          surface: backgroundMain,
        },
      },
    },
    //TODO: Dark Mode
  },
});
