
import { StyleSheet, Button, Text, View, Image, NativeModules, SafeAreaView, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './navigation/StackNavigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';


export default function App() {
  

  return (
  <>
    <StatusBar/>
  <NavigationContainer>
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <StackNavigation />     
    </Provider>
    </SafeAreaView>
    </SafeAreaProvider>
    </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7eae5',
    //paddingTop: Platform.OS === 'android' ? 0 : 0,

    
    
  },
});
