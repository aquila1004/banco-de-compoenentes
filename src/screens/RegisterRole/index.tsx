import React, { memo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BlueButton } from "../../components/BlueButton";
import { Dropdown } from "../../components/Dropdown";
import {
  Container,
  Title,
  BackButtonWrapper,
  TitleWrapper,
  TextFieldWrapper,
  Subtitle,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { MessageBalloon } from "../../components/MessageBallon";
import Toast from "../../components/Toast";
export function RegisterRole({ navigation }: { navigation: any }) {
  const [role, setRole] = useState("2");
  const [error, setError] = useState("");
  const [notSavedDataMsg, setNotSavedDataMsg] = useState<boolean>(false);
  const dropdownItems = [
    { id: "2", name: "Aluno" },
    { id: "1", name: "Personal" },
  ];

  const _onLoginPressed = async () => {
    if (role == "") {
      setError("Selecione um tipo de perfil");
      return;
    }

    navigation.navigate("RegisterScreen", { role });
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <BackButtonWrapper>
          <BackButton onPress={() => setNotSavedDataMsg(true)} />
        </BackButtonWrapper>
        <TitleWrapper>
          <Title>Selecionar perfil</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Subtitle>Selecione um tipo de perfil para cadastrar </Subtitle>
          <Subtitle>um usuário</Subtitle>
        </TitleWrapper>
        <TextFieldWrapper>
          <Dropdown
            placeholder="Tipo de perfil"
            setData={setRole}
            objects={dropdownItems}
          />
        </TextFieldWrapper>
        <BlueButton buttonText="Continuar" action={_onLoginPressed} />
      </ScrollView>
      <Toast message={error} onDismiss={() => setError("")} />
      {notSavedDataMsg && (
        <MessageBalloon
          hasGoBackButton
          title="Atenção"
          text="Um ou mais itens que não foram salvos serão perdidos com essa ação."
          handleCancelButton={() => setNotSavedDataMsg(false)}
          handleConfirmButton={() => {
            setNotSavedDataMsg(false);
            navigation.pop();
          }}
        />
      )}
    </Container>
  );
}

export default memo(RegisterRole);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
});
