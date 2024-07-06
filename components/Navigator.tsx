import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import JournalListScreen from '../screens/JournalListScreen';
import JournalEntryScreen from '../screens/JournalEntryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

const MainTabScreen = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Journals" component={JournalListScreen} />
    <MainTab.Screen name="New Journal" component={JournalEntryScreen} />
    <MainTab.Screen name="Settings" component={SettingsScreen} />
  </MainTab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <AuthStackScreen />
    <MainTabScreen />
  </NavigationContainer>
);

export default AppNavigator;
