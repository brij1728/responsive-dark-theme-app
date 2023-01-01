import { DefaultTheme } from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary?: string;
      background?: string;
      text?: string;
    };
    headerHeight?: string;
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#fff",
    background: "pink",
    text: "#1a161b",
  },
  headerHeight: "50px",
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#fff",
    background: "grey",
    text: "#1a161b",
  },
  headerHeight: "50px",
};
