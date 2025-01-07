import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";
import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<ButtonPreset, {
  defauld: ButtonUI;
  disabled: ButtonUI;
  }
> = {
  primary: {
   defauld: {
    container: {
      backgroundColor: 'buttonPrimary',
    },
    content: 'primaryContrast',
  },
  disabled: {
    container: {
      backgroundColor: 'gray4',
    },
    content: 'gray2',
  },
  },
  outline: {
    defauld: {
    container: {
      borderWidth: 1,
      borderColor: 'buttonPrimary',
    },
    content: 'buttonPrimary',
  },
  disabled: {
    container: {
      borderWidth: 1,
      borderColor: 'gray4',
    },
    content: 'gray2',
  },
  },
};