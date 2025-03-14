import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ThemeProvider } from '@shopify/restyle';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { TextInput } from './src/components/TextInput/TextInput ';
import { theme } from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mb="s8" bold preset="headingLarge">
            Olá!
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s20">
            <TextInput
              label='E-mail'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              placeholder='Digite seu e-mail'
            />
          </Box>
          <Box>
            <TextInput
              label='Senha'
              secureTextEntry
              placeholder='Digite sua senha'
            />
          </Box>
          <Text mt="s10" preset="paragraphSmall" bold color='primary'>
            Esqueci minha senha
          </Text>
          <Button title='Entrar' mt='s48'/>
          <Button title='Criar uma conta' mt='s12' preset='outline' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
