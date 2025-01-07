import React from "react";
import { Text } from "../Text/Text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme/theme";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { buttonPresets } from "./buttonPresets";
import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";

export type ButtonPreset = "primary" | "outline";
interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset: ButtonPreset;
  disabled?: boolean;
}
export function Button({
  title,
  loading,
  preset = "primary",
  disabled,
  ...TouchableOpacityBoxProps
}: ButtonProps) {

  const { } = useTheme<Theme>();

  const buttonUI = buttonPresets[preset][disabled ? "disabled" : "defauld"];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonUI.container}
      {...TouchableOpacityBoxProps}
      margin="s8"
    >
      {loading ? (
        <ActivityIndicator
         color={buttonUI.content}
        />
      )
        : (<Text
          preset="paragraphMedium"
          bold
          selectionColor={buttonUI.content}
        >
          {title}
        </Text>)}
    </TouchableOpacityBox>
  )
}