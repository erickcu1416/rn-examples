import React, { useState } from 'react';
import Navigator from './src/navigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as appTheme } from './assets/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const theme = { ...lightTheme, ...appTheme };

const getFonts = () => Font.loadAsync({
  'GoogleSans-Bold': require('./assets/fonts/GoogleSans-Bold.ttf')
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <Navigator/>
        </ApplicationProvider>
      </React.Fragment>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}