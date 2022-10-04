import { View, Text } from "react-native";
import React, { useState } from "react";

import { Wrapper, FlashCardText } from "./styled";

const FlashCard = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    "Violentia solvit omnia",
  ];

  const handlePress = () => {
    if (currentPhrase === phrases.length - 1) {
      return setCurrentPhrase(0);
    }
    return setCurrentPhrase(currentPhrase + 1);
  };

  return (
    <Wrapper onPress={handlePress}>
      <FlashCardText>{phrases[currentPhrase]}</FlashCardText>
    </Wrapper>
  );
};

export default FlashCard;
