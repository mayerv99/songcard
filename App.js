import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import { View, Text } from "react-native";

//StackNavigator
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Theming
import { ThemeProvider } from "styled-components";
import theme from "./theme.jsx";

// Screens
import InitialPage from "./Screens/InitialPage/index.jsx";
import LoginPage from "./Screens/LoginPage/index.jsx";
import MainPage from "./Screens/MainPage/index.jsx";
import LanguagePage from "./Screens/LanguagePage/index.jsx";

//Context
import LanguageProvider from "./Context/LanguageContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: {
                backgroundColor: "white",
              },
            }}
          >
            <Stack.Screen name="initialPage" component={InitialPage} />
            <Stack.Screen name="loginPage" component={LoginPage} />
            <Stack.Screen name="mainPage" component={MainPage} />
            <Stack.Screen name="languagePage" component={LanguagePage} />
          </Stack.Navigator>

          <StatusBar style="auto" />
        </NavigationContainer>
      </LanguageProvider>
    </ThemeProvider>
  );
}
