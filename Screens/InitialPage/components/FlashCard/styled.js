import styled from "styled-components";

export const Wrapper = styled.TouchableOpacity`
  width: 90%;
  margin: 70px auto;
  background-color: ${(props) => props.theme.background.primary};
  min-height: 75px;
  border-radius: 10px;
  padding: 20px;
`;

export const FlashCardText = styled.Text`
  text-align: center;
  font-weight: 600;
  margin: auto 0;
`;
