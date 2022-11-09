import styled from "styled-components";

export const Header = styled.View`
  width: 90%;
  margin: 10px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const SelectLanguage = styled.Pressable`
  background-color: ${(props) => props.theme.background.primary};
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
`;

export const List = styled.FlatList``;
