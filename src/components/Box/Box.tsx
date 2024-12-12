import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";
import {
  createBox, 
  createRestyleComponent,
  backgroundColor,
  spacing,
  border,
  layout,
  BackgroundColorProps,
  SpacingProps,
  BorderProps,
  LayoutProps,
  spacingShorthand,
  SpacingShorthandProps
} from "@shopify/restyle";
import { Theme } from "../../theme/theme";

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
 SpacingProps<Theme> & 
 BorderProps<Theme> & 
 LayoutProps<Theme> & 
 SpacingShorthandProps<Theme> &
 RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([
  backgroundColor,
  spacing,
  border,
  layout,
  spacingShorthand,
], TouchableOpacity);