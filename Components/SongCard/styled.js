import styled from "styled-components";

export const Wrapper = styled.Pressable`
  width: 90%;
  margin: 10px auto;
  background-color: ${(props) => props.theme.background.primary};
  padding: 20px 15px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const RoundedPic = styled.Image`
  width: 75px;
  height: 75px;
  background-color: white;
  border-radius: 100px;
`;

export const SongNameAndArtist = styled.View`
  display: flex;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

export const SongName = styled.Text`
  width: 72%;
  font-size: ${(props) => props.theme.font.sizes.title};
  font-weight: 600;
`;

export const ArtistName = styled.Text`
  width: 72%;
  font-size: ${(props) => props.theme.font.sizes.subTitle};
`;
