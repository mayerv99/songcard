import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

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
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          marginHorizontal: 20,
          elevation: 0,
          backgroundColor: "#f3f3f8",
          borderRadius: 25,
          height: 80,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
        tabBarActiveTintColor: "#7512f3",
      }}
    >
      <Tab.Screen
        name="mainPage"
        component={MainPage}
        options={{
          tabBarLabel: "Músicas",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <MaterialCommunityIcons
                name="account-music-outline"
                size={25}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="learningPage"
        component={LearningPage}
        options={{
          tabBarLabel: "Aprendizado",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <SimpleLineIcons name="graduation" size={25} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="collectionPage"
        component={CollectionPage}
        options={{
          tabBarLabel: "Coleção",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <MaterialCommunityIcons
                name="card-multiple-outline"
                size={25}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <FontAwesome5 name="user" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { NoAppBarRoutes, AppBarRoutes };
