import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//RoutesWithoutNavbar
import InitialPage from "./Screens/InitialPage";
import LanguagePage from "./Screens/LanguagePage";

//RoutesWithNavbar
import MainPage from "./Screens/MainPage";
import ProfilePage from "./Screens/ProfilePage";
import LearningPage from "./Screens/LearningPage";
import CollectionPage from "./Screens/CollectionPage";

// Icon
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NoAppBarRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="initialPage" component={InitialPage} />
      <Stack.Screen name="languagePage" component={LanguagePage} />
    </Stack.Navigator>
  );
}

function AppBarRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderRadius: 10 },
        tabBarActiveTintColor: "#7512f3",
      }}
    >
      <Tab.Screen
        name="mainPage"
        component={MainPage}
        options={{
          tabBarLabel: "Músicas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-music-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="learningPage"
        component={LearningPage}
        options={{
          tabBarLabel: "Aprendizado",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="graduation" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="collectionPage"
        component={CollectionPage}
        options={{
          tabBarLabel: "Coleção",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-multiple-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { NoAppBarRoutes, AppBarRoutes };
