import { View, Text } from "react-native";
import React, { useState } from "react";

import { Wrapper, FlashCardText } from "./styled";

const FlashCard = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Escute suas músicas preferidas e se divirta enquanto aprende um novo idioma!",
    "Já fez seus exercícios de SongCard hoje?",
    "Qual música vc quer estudar? Escolha uma de algum país que ainda não visitou!",
    "Faça alguns exercícios todo dia para melhorar o seu aprendizado",
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
