import React, { memo, useState } from "react";
import { BlueButton } from "../../components/BlueButton";
import { TextField } from "../../components/TextFiel";
import { MessageBalloon } from "../../components/MessageBallon";
import Spinner from "react-native-loading-spinner-overlay";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Title,
  TextFieldWrapper,
  Subtitle,
  TitleWrapper,
  ButtonWrapper
} from "./styles";

export function ForgotPasswordScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [notSavedDataMsg, setNotSavedDataMsg] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const _onSendPressed = async () => {
    navigation.navigate("ForgotPasswordConfirm");
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TitleWrapper>
          <Title>Redefinir senha</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Subtitle>Insira seu endereço de email e eviaremos</Subtitle>
          <Subtitle>um código para redefinir sua senha!</Subtitle>
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
        <ButtonWrapper>
        <BlueButton buttonText=" Enviar" action={_onSendPressed} />
        </ButtonWrapper>
        <Spinner visible={isLoading} />
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
      {alert && (
        <MessageBalloon
          title="Atenção"
          text="Por favor, preencha com seu email antes de enviar."
          handleConfirmButton={() => {
            setAlert(false);
          }}
        />
      )}
    </Container>
  );
}

export default memo(ForgotPasswordScreen);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
});
