import React from "react";
import { ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps } from "react-native";
import { Theme, ThemeColors } from "../../theme/theme";
import { useTheme } from "@shopify/restyle";

interface RNActivityIndicatorProps extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({ color }: RNActivityIndicatorProps) {

  const { colors } = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} />;
}