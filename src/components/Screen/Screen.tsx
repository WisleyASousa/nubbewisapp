import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { useAppTheme } from "../../hooks/useAppTheme";
import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { ScrollViewCOntainer, ViewContainer } from "./components/ScreenContainer";

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({ children, canGoBack = false }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = ScrollView ? ScrollViewCOntainer : ViewContainer;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Container backgroundColor={colors.background}>
        <Box paddingBottom="s24" paddingHorizontal="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
          {canGoBack && <Box mb="s24" flexDirection="row" alignItems="center">
            <Icon name="arrowLeft" color="primary" />
            <Text ml="s8" preset="paragraphMedium" semiBold>Voltar</Text>
          </Box>}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}