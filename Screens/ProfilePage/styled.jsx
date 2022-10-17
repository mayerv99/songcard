import styled from "styled-components";

export const Wrapper = styled.SafeAreaView`
  background-color: ${(props) => props.theme.background.primary};
  min-width: 100%;
`;

export const UserDataWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const NameAndEmailWrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: space-around;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const UserEmail = styled.Text``;

export const ProfilePic = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 100px;
`;

export const Button = styled.Pressable`
  width: 90%;
  margin: 20px auto;
  background-color: red;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 5px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const Title = styled.Text`
  width: 90%;
  margin: 20px auto 0;
  font-weight: 600;
  font-size: 16px;
`;

export const Languages = styled.View`
  width: 90%;
  margin: 20px auto;
  padding-bottom: 20px;
`;

export const ImagesWrapper = styled.View`
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 5px;
  height: 50px;
  width: 100%;
`;

export const PerformanceWrapper = styled.View`
  width: 90%;
  margin: 20px auto;
  padding-bottom: 20px;
`;

export const DoubleCardsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
