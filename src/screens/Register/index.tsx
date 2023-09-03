import React, { memo, useState } from "react";
import { BlueButton } from "../../components/BlueButton";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Title,
  TextFieldWrapper,
  TitleWrapper,
  ButtonWrapper,
  Divider,
  RegisterContainer,
  RegisterContent,
} from "./styles";

import { TextField } from "../../components/TextFiel";
import { MessageBalloon } from "../../components/MessageBallon";

const RegisterScreen = ({ navigation, route }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setnumber] = useState({ value: "", error: "" });
  const [birthday, setBirthday] = useState({ value: "", error: "" });
  const [notSavedDataMsg, setNotSavedDataMsg] = useState<boolean>(false);

  const _onSignUpPressed = async () => {};
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Divider></Divider>
        <TitleWrapper>
          <Title>Cadastro de usuário</Title>
        </TitleWrapper>
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
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChange={(text) => setEmail({ value: text, error: "" })}
            value={email.value}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            value={number.value}
            onChange={(text) => setnumber({ value: text, error: "" })}
            placeholder="(xx) xxxxx-xxxx"
            keyboardType="number-pad"
            maxLength={11}
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
        <TextFieldWrapper>
          <TextField
            placeholder="Data de nascimento"
            value={birthday.value}
            onChange={(text) => setBirthday({ value: text, error: "" })}
            keyboardType="number-pad"
            maxLength={8}
          />
        </TextFieldWrapper>
        <ButtonWrapper>
          <BlueButton buttonText="Cadastrar" action={_onSignUpPressed} />
        </ButtonWrapper>
        <RegisterContainer onPress={() => navigation.navigate("LoginScreen")}>
          <RegisterContent>
            Ainda não tem uma conta? Cadastre-se
          </RegisterContent>
        </RegisterContainer>
      </ScrollView>
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
