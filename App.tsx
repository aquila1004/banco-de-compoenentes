import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  LoginScreen,
  RegisterScreen,
  RegisterRole,
  ForgotPasswordScreen,
  ForgotPasswordConfirm,
  AuthLoadingScreen,
  Navbar,
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="RegisterRole" component={RegisterRole} />
          <Stack.Screen name="Dashboard" component={Navbar} />
          <Stack.Screen
            name="ForgotPasswordConfirm"
            component={ForgotPasswordConfirm}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
