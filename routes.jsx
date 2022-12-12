import React, { useRef } from "react";
import { View, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//RoutesWithoutNavbar
import InitialPage from "./Screens/InitialPage";
import LanguagePage from "./Screens/LanguagePage";
import useCurrentSong from "./Context/Hooks/useCurrentSong";

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
  const { setCurrentSong, songFile, setSongFile, setPlaying } =
    useCurrentSong();

  const calculateAppBarHeight = () => {
    let height = Dimensions.get("window").height;

    return height / 11;
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            marginHorizontal: 20,
            elevation: 0,
            backgroundColor: "#f3f3f8",
            borderRadius: 15,
            height: calculateAppBarHeight(),
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 10,
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
              <View style={{ marginVertical: "auto" }}>
                <MaterialCommunityIcons
                  name="account-music-outline"
                  size={25}
                  color={color}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              songFile?.unloadAsync();
              setCurrentSong();
              setSongFile();
              setPlaying(false);
            },
          })}
        />
        <Tab.Screen
          name="learningPage"
          component={LearningPage}
          options={{
            tabBarLabel: "Aprendizado",
            tabBarIcon: ({ color }) => (
              <View style={{ marginVertical: "auto" }}>
                <SimpleLineIcons name="graduation" size={25} color={color} />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            beforeRemove: () => {
              songFile?.unloadAsync();
              setCurrentSong();
              setSongFile();
              setPlaying(false);
            }
          })}
        />

        <Tab.Screen
          name="collectionPage"
          component={CollectionPage}
          options={{
            tabBarLabel: "Coleção",
            tabBarIcon: ({ color }) => (
              <View style={{ marginVertical: "auto" }}>
                <MaterialCommunityIcons
                  name="card-multiple-outline"
                  size={25}
                  color={color}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              songFile?.unloadAsync();
              setCurrentSong();
              setSongFile();
              setPlaying(false);
            },
          })}
        />
        <Tab.Screen
          name="profilePage"
          component={ProfilePage}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <View style={{ marginVertical: "auto" }}>
                <FontAwesome5 name="user" size={24} color={color} />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              songFile?.unloadAsync();
              setCurrentSong();
              setSongFile();
              setPlaying(false);
            },
          })}
        />
      </Tab.Navigator>
    </>
  );
}

export { NoAppBarRoutes, AppBarRoutes };
