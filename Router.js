import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Login from './src/pages/Login';
import SignIn from './src/pages/SignIn';
import Chat from './src/pages/Chat';
import Rooms from './src/pages/Rooms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignInPage" component={SignIn} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    const subscribe = auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
    return subscribe;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="AuthScreen"
            component={Auth}
          />
        ) : (
          <>
            <Stack.Screen name="Odalar" component={Rooms} />
            <Stack.Screen name="Mesajlar" component={Chat} />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
