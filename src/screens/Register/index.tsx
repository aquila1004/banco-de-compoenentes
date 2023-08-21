import React, { memo, useState, useEffect } from "react";
import { BlueButton } from "../../components/BlueButton";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Title,
  TextFieldWrapper,
  TitleWrapper,
  Subtitle,
  BackButtonWrapper,
} from "./styles";
import Toast from "../../components/Toast";
import { TextField } from "../../components/TextFiel";
import { nameValidator } from "../../helpers/nameValidator";
import { emailValidator } from "../../helpers/emailValidator";
import { passwordValidator } from "../../helpers/passwordValidator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MessageBalloon } from "../../components/MessageBallon";
import { BackButton } from "../../components/BackButton";
const RegisterScreen = ({ navigation, route }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notSavedDataMsg, setNotSavedDataMsg] = useState<boolean>(false);

  useEffect(() => {
    fetchRole(route.params.role);
  }, []);

  const fetchRole = async (role_param) => {
    setRole(role_param);
  };

  const _onSignUpPressed = async () => {
    
  };
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <BackButtonWrapper>
          <BackButton onPress={() => setNotSavedDataMsg(true)} />
        </BackButtonWrapper>
        <TitleWrapper>
          <Title>Criar perfil</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Subtitle>Preencha abaixo com seus dados para  </Subtitle>
          <Subtitle>cadastrar um usuário</Subtitle>
        </TitleWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChange={(text) => setEmail({ value: text, error: "" })}
            value={email.value}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="Nome"
            autoCapitalize="words"
            onChange={(text) => setName({ value: text, error: "" })}
            value={name.value}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            onChange={(text) => setPassword({ value: text, error: "" })}
            value={password.value}
          />
        </TextFieldWrapper>

        <BlueButton buttonText="Criar" action={_onSignUpPressed} />
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
};

export default memo(RegisterScreen);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
});
