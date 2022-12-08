import styled from "styled-components";

export const MyButton = styled.Pressable`
  width: 90%;
  margin: 8px auto;
  padding: 15px;

  border-radius: 5px;

  background-color: ${(props) =>
    props.outlined ? "tranparent" : props.theme.colors.primary};

  border: 1px solid
    ${(props) => (props.outlined ? props.theme.colors.primary : "transparent")};
`;

export const MyButtonText = styled.Text`
  text-align: center;

  font-weight: 700;

  color: ${(props) => (props.outlined ? props.theme.colors.primary : "white")};

  font-size: ${(props) => props.fontSize};
`;
