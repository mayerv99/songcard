import styled from "styled-components";

import { LinearGradient } from "expo-linear-gradient";

export const LyricsWrapper = styled.ScrollView.attrs({
  contentContainerStyle: { paddingVertical: 25, paddingHorizontal: 20 },
})`
  width: 90%;
  margin: 50px auto 40px;
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  max-height: 65%;
`;

export const Word = styled.TouchableOpacity`
  margin: 2px 0;
  border-radius: 5px;
  ${(props) =>
    props.selected &&
    `background-color: ${props.theme.colors.primary}; color: white;`};
`;

export const WordText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  padding: 2px;

  ${(props) => props.selected && `color: white;`};
`;

export const PlayPauseButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 19%;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #7615f3;
  border-radius: 50px;
`;

export const Navbar = styled(LinearGradient).attrs({
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
