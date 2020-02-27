import React from 'react';
import Navigator from './src/navigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as appTheme } from './assets/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const theme = { ...lightTheme, ...appTheme };

export default function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Navigator/>
      </ApplicationProvider>
    </React.Fragment>
  );
}