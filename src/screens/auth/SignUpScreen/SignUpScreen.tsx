import React from 'react';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput ';

export function SignUpScreen() {

  const submitForm = () => {
    console.log('Form submitted!');
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{ mb: "s20" }} />
      <TextInput label="Nome completo" placeholder="Digite seu nome" boxProps={{ mb: "s20" }} />
      <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: "s20" }} />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's48',
        }}
      />
      <Button onPress={submitForm} title="Criar uma conta" />
      
    </Screen>
  );
}
