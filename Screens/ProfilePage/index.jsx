import {
  Wrapper,
  UserDataWrapper,
  NameAndEmailWrapper,
  UserName,
  UserEmail,
  ProfilePic,
  Button,
  ButtonText,
} from "./styled";

import useCurrentUser from "../../Context/Hooks/useCurrentUser";

export default function ProfilePage() {
  const { currentUser } = useCurrentUser();
  return (
    <Wrapper>
      <UserDataWrapper>
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
      </UserDataWrapper>

      <Button>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Wrapper>
  );
}
