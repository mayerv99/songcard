import { View, SafeAreaView, Image } from "react-native";
import React from "react";

import AppName from "../../Components/AppName";

// Page components
import FlashCard from "./components/FlashCard";
import CustomButton from "../../Components/CustomButton";

//Styled
import { ButtonsDiv } from "./styled";

const InitialPage = (props) => {
  const handleGoogleLogin = () => {};

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/AppLogo.png")} />
      </View>

      <AppName />

      <FlashCard />

      <ButtonsDiv>
        <CustomButton
          title="Entrar"
          // onPress={() => props.navigation.navigate("loginPage")}
          onPress={() => {}}
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
