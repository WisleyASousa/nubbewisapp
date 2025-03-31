import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput ';

export function LoginScreen() {
  return (
    <Screen>
      <View style={{paddingHorizontal: 24}}>
        <Text mb="s8" bold preset="headingLarge">
          Olá!
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>
        <TextInput
          label="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          errorMessage="E-mail inválido"
          boxProps={{
            mb: 's20',
          }}
        />
        <TextInput
          label="Senha"
          secureTextEntry
          placeholder="Digite sua senha"
          RightComponent={<Icon name="eyeOn" color="gray2" />}
          boxProps={{
            mb: 's10',
          }}
        />
        <Text preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>
        <Button title="Entrar" mt="s48" />
        <Button title="Criar uma conta" mt="s12" preset="outline" />
      </View>
    </Screen>
  );
}
