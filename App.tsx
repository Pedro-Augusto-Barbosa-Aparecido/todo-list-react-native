import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';

import * as Svg from 'react-native-svg';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Home />  
    </>
  );
}
