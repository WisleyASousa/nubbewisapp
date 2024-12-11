import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Text } from './src/components/Text/Text';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Text preset='paragraphCaption' style={{ fontFamily: 'Satoshi-Black' }}>
        Hello World!
      </Text>
    </SafeAreaView>
  );
}

export default App;
