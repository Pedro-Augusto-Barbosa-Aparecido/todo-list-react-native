import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';

import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Home />  
      <Toast 
        position='top'
        topOffset={50}
      />
    </>
  );
}
