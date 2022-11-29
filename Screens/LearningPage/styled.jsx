import styled from "styled-components";

export const LyricsWrapper = styled.View`
  width: 90%;
  margin: 50px auto;
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  padding: 20px;
  overflow-y: scroll;
`;

export const Word = styled.Text`
  padding: 0 2px;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`;
