import { useEffect, useState } from "react";

import { View, SafeAreaView, Image } from "react-native";
import React from "react";

import AppName from "../../Components/AppName";

// Page components
import FlashCard from "./components/FlashCard";
import CustomButton from "../../Components/CustomButton";

//Styled
import { ButtonsDiv } from "./styled";

import * as WebBrowser from "expo-web-browser";

import * as Google from "expo-auth-session/providers/google";

import useCurrentUser from "../../Context/Hooks/useCurrentUser";

WebBrowser.maybeCompleteAuthSession();

const InitialPage = (props) => {
  const [accessToken, setAccessToken] = useState();
  const { currentUser, setCurrentUser } = useCurrentUser();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "855045027433-l2fi7m7bj2bf11e0ea9go8s7rl021mb5.apps.googleusercontent.com",
    iosClientId:
      "855045027433-egr66dp8gvne97g9uo5q7or08o2h1q3l.apps.googleusercontent.com",
    androidClientId:
      "855045027433-0cducfk0vbcv4ag7k9r13jfqdfdltuqp.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication?.accessToken);
      accessToken && handleGoogleSignIn();
    }
  }, [response, accessToken]);

  const fetchUserInfo = async () => {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userInfo = await response.json();
    setCurrentUser(userInfo), console.log("user", userInfo);
  };

  const handleGoogleSignIn = () => {
    fetchUserInfo();
    props.navigation.replace("appBarRoutes");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/AppLogo.png")} />
      </View>

      <AppName />

      <FlashCard />

      <ButtonsDiv>
        <CustomButton
          title="Entrar"
          onPress={() => {
            promptAsync();
          }}
        />
        <CustomButton
          title="Entrar como convidado"
          outlined={true}
          onPress={() => props.navigation.navigate("languagePage")}
        />
      </ButtonsDiv>
    </SafeAreaView>
  );
};

export default InitialPage;
