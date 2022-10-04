import React from "react";

import AppName from "../../Components/AppName";

import { PageWrapper, Input, FormDiv, ForgetPassword } from "./styled";

import CustomButton from "../../Components/CustomButton";

const LoginPage = (props) => {
  return (
    <PageWrapper>
      <AppName />
      <FormDiv>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          autoCompleteType="email"
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <ForgetPassword>Esqueceu sua senha?</ForgetPassword>

        <CustomButton
          title="Entrar"
          fontSize="14px"
          onPress={() => props.navigation.replace("mainPage")}
        />
        <CustomButton
          title="Entrar com Google"
          fontSize="14px"
          outlined={true}
        />
      </FormDiv>
    </PageWrapper>
  );
};

export default LoginPage;
