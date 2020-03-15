var Color = require("color");

export const PRIMARY_COLOR = "dodgerblue";
export const ACTION_SHEET_ICON_COLOR = "#222222";

export enum PaginationDotColors {
  ACTIVE = "rgb(255,255,255)",
  INACTIVE = "rgba(255,255,255, 0.5)"
}
export enum ButtonColors {
  LIGHT = "#f4f4f4",
  INFO = "#3f57d3",
  PRIMARY = "#3f51b5",
  SUCCESS = "#5cb85c",
  WARNING = "#f0ad4e",
  DANGER = "#d9534f",
  DARK = "#020202",
  DISABLED = "#808080"
}

export const ButtonBorderColors = {
  LIGHT: Color(ButtonColors.LIGHT)
    .lighten(0.5)
    .rgb()
    .string(),
  INFO: Color(ButtonColors.INFO)
    .lighten(0.5)
    .rgb()
    .string(),
  PRIMARY: Color(ButtonColors.PRIMARY)
    .lighten(0.5)
    .rgb()
    .string(),
  SUCCESS: Color(ButtonColors.SUCCESS)
    .lighten(0.5)
    .rgb()
    .string(),
  WARNING: Color(ButtonColors.WARNING)
    .lighten(0.5)
    .rgb()
    .string(),
  DANGER: Color(ButtonColors.DANGER)
    .lighten(0.5)
    .rgb()
    .string(),
  DARK: Color(ButtonColors.DARK)
    .lighten(0.5)
    .rgb()
    .string(),
  DISABLED: Color(ButtonColors.DISABLED)
    .lighten(0.5)
    .rgb()
    .string()
};

export enum ThemeColors {
  background = "aliceblue"
}

export const TextColors = {
  INFORMATION_TEXT: "#1e90ff",
  HEADER_TEXT: Color("#1e90ff")
    .lighten(0.4)
    .rgb()
    .string()
};

export enum FormColors {
  BACKGROUND = "#ffffff",
  BORDER = "dodgerblue",
  INPUT_LABEL = "dodgerblue",
  SHADOW = "black"
}
