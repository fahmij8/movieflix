import { css } from "@emotion/css";
import { PaletteMode } from "@mui/material";

export const colorPrimary = "#6F6FC8";
export const colorSecondary = "#59B9A8";
export const colorError = "#FF3D63";
export const colorInfo = "#1C7AFF";
export const colorWarning = "#FFA811";
export const colorSuccess = "#4BD84B";
export const colorBgLight = "#F5F5F5";
export const colorBgDark = "#1F1D2C";
export const colorBgWhite = "#FFFFFF";

export const appStyle = (isDarkMode: PaletteMode) =>
  css({
    backgroundColor: isDarkMode === "dark" ? colorBgDark : colorBgLight,
    minHeight: "100vh"
  });

export const getThemeOptions = (pallete: PaletteMode) => ({
  palette: {
    mode: pallete,
    primary: {
      main: colorPrimary
    },
    secondary: {
      main: colorSecondary
    },
    error: {
      main: colorError
    },
    info: {
      main: colorInfo
    },
    warning: {
      main: colorWarning
    },
    success: {
      main: colorSuccess
    },
    background: {
      default: pallete === "dark" ? colorBgDark : colorBgLight,
      paper: pallete === "dark" ? colorBgDark : colorBgWhite
    }
  }
});
