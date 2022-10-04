import styled from "styled-components";

export const PageWrapper = styled.View`
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: ${(props) => props.theme.background.primary};
  padding: 15px 20px;

  margin: 15px auto;
  border-radius: 5px;
`;

export const FormDiv = styled.View`
  margin-top: 100px;
`;

export const ForgetPassword = styled.Text`
  width: 90%;
  text-align: right;
  margin: 5px auto 20px;
`;
