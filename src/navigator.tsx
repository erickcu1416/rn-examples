import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/containers/login';
import HomeScreen from './screens/containers/home';
import SplashScreen from './screens/containers/splashscreen';
import RegisterScreen from './screens/containers/register';

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
);

function Navigator() {
    return (
        <NavigationContainer>
            <HomeNavigator/>
        </NavigationContainer>
    );
}

export default Navigator;