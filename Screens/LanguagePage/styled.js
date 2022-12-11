import styled from "styled-components";

export const Title = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;

export const Wrapper = styled.ScrollView`
  width: 90%;
  background-color: ${(props) => props.theme.background.primary};
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
`;

export const LanguageItem = styled.Pressable`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  padding: 5px;
  margin: 10px 0;
`;
