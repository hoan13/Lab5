import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import HomeScreen from "./HomeScreen";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

import ProfileScreen from "./ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bai2 from "./Bai2";
import Bai3 from "./Bai3";
import Bai4 from "./Bai4";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="bai2" component={Bai2} />
        <Stack.Screen name="bai3" component={Bai3} />
        <Stack.Screen name="bai4" component={Bai4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
