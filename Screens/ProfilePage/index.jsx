import { Text } from "react-native";

import {
  Wrapper,
  UserDataWrapper,
  NameAndEmailWrapper,
  UserName,
  UserEmail,
  ProfilePic,
  Languages,
  Title,
  ImagesWrapper,
  PerformanceWrapper,
  DoubleCardsWrapper,
} from "./styled";

import StatusCard from "./Components/StatusCard";

import useCurrentUser from "../../Context/Hooks/useCurrentUser";

export default function ProfilePage(props) {
  const { currentUser } = useCurrentUser();

  return (
    <Wrapper
      style={{ backgroundColor: "white", minHeight: "100%", marginTop: 35 }}
    >
      <UserDataWrapper
        style={{
          borderBottomColor: "#f3f3f8",
          borderBottomWidth: 2,
        }}
      >
        {currentUser ? (
          <>
            <NameAndEmailWrapper>
              <UserName>
                {currentUser?.given_name} {currentUser?.family_name}
              </UserName>
              <UserEmail>{currentUser?.email}</UserEmail>
            </NameAndEmailWrapper>
            <ProfilePic
              source={{
                uri: currentUser?.picture,
              }}
            />
          </>
        ) : (
          <Text>Não logado</Text>
        )}
      </UserDataWrapper>

      {/* <Button>
        <ButtonText>Sair</ButtonText>
      </Button> */}
      <Title>Idiomas favoritos</Title>

      <Languages style={{ borderBottomColor: "#f3f3f8", borderBottomWidth: 2 }}>
        <ImagesWrapper></ImagesWrapper>
      </Languages>
      <Title>Performance</Title>
      <PerformanceWrapper
        style={{ borderBottomColor: "#f3f3f8", borderBottomWidth: 2 }}
      >
        <DoubleCardsWrapper>
          <StatusCard title="Número de músicas" value={0} />
          <StatusCard title="Número de flashcards" value={0} />
        </DoubleCardsWrapper>
      </PerformanceWrapper>
      <Title>Conquistas</Title>
    </Wrapper>
  );
}
