import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native";

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
import CurrentSongProvider from "./Context/CurrentSongContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <AuthenticationProvider>
        <LanguageProvider>
          <CurrentSongProvider>
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
          </CurrentSongProvider>
        </LanguageProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
