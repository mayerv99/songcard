import styled from "styled-components";

import { LinearGradient } from "expo-linear-gradient";

export const CardsWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 25,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
})`
  width: 90%;
  margin: 40px auto 0;
  max-height: 70%;
`;

export const FlashCardWrapper = styled.TouchableOpacity`
  width: 49%;
  background-color: ${(props) => props.theme.background.primary};
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
`;

export const FlashCardHeader = styled.View`
  border-bottom: 2px solid white;
`;

export const FlashCardTitle = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

export const FlashCardBody = styled.View`
  padding: 10px 0;
`;

export const FlashCardBodyText = styled.Text`
  font-size: 12px;
`;

export const TopBar = styled(LinearGradient).attrs({
  colors: ["#7615F3", "rgba(117, 22, 242, 0.63)"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 15%;
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

export const InfoCard = styled.View`
  position: absolute;
  width: 90%;
  height: 75%;
  background-color: ${(props) => props.theme.background.primary};
  bottom: -35px;
  left: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
export const InfoGroup = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextCount = styled.Text`
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  color: #818181;
`;

export const SongTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
export const ArtistName = styled.Text`
  color: white;
  font-size: 14px;
`;
