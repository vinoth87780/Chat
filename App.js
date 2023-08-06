import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from './src/theme/Colors';
import CommunityScreen from './src/Screens/CommunityScreen';
import ChatlistScreen from './src/Screens/ChatlistScreen';
import chatscreen from './src/Screens/Chatscreen';
import CalllistScreen from './src/Screens/CalllistScreen';
import StatusScreen from './src/Screens/StatusScreen';
import Chatscreen from './src/Screens/Chatscreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primaryColor}
      />
      {/* <HomeScreen /> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Chatlist" component={ChatlistScreen} />
        <Stack.Screen
          name="Chat"
          component={Chatscreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen name="Calllist" component={CalllistScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
