import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text/Text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme/theme";

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {

  const {  } = useTheme<Theme>();

  return (
    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 14 }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}