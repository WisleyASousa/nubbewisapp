import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text/Text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme/theme";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading }: ButtonProps) {

  const {  } = useTheme<Theme>();

  return (
    <TouchableOpacityBox>
      <Text>{title}</Text>
    </TouchableOpacityBox>
  )
}