import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

//StackNavigator
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Theming
import { ThemeProvider } from "styled-components";
import theme from "./theme.jsx";

//AppBarScreens
import { NoAppBarRoutes, AppBarRoutes } from "./routes.jsx";

//NoAppBarScreens

//Context
import AuthenticationProvider from "./Context/AuthenticationContext.jsx";
import LanguageProvider from "./Context/LanguageContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <AuthenticationProvider>
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
              <Stack.Screen name="noAppBarRoutes" component={NoAppBarRoutes} />
              <Stack.Screen name="appBarRoutes" component={AppBarRoutes} />
            </Stack.Navigator>
          </NavigationContainer>
        </LanguageProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
