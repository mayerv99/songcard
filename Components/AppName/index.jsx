import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const AppName = ({ fontSize = 36, fontWeight = "700" }) => {
  return (
    <View>
      <Text style={{ fontSize, fontWeight, textAlign: "center" }}>
        <First>Song</First>Card
      </Text>
    </View>
  );
};

const First = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export default AppName;
