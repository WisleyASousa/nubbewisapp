import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { ThemeProvider } from '@shopify/restyle';
import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/Icon/Icon';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';

function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset='headingLarge' italic>
          Coffstack
        </Text>
        <Box flexDirection='row'>
          <Icon name='eyeOff' color={'greenSuccess'} size={20}/>
          <Icon name='eyeOn' color={'primary'} size={20}/>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App; 
