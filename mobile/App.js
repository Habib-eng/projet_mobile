import 'react-native-gesture-handler';
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import {Stack, Drawer} from "./src/navigation/Stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Autodiagnostic from './src/screens/Autodiagnostic';
import Visites from './src/screens/Visites';
import Appointment from './src/screens/Appointment';
import { AccountStack } from './src/screens/AccountStack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="user-account" component={AccountStack} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const zoomOut = {
  0: {
    opacity: 0,
    scale: 0,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

const bounceInDown = {
  0: {
    top: 0,
  },
  0.5: {
    top: 100,
  },
  1: {
    top: 0,
  },
};
