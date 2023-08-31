import React, { memo, useState } from "react";
import { BlueButton } from "../../components/BlueButton";
import { BackButton } from "../../components/BackButton";
import { TextField } from "../../components/TextFiel";
import { MessageBalloon } from "../../components/MessageBallon";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Title,
  TextFieldWrapper,
  Subtitle,
  BackButtonWrapper,
  TitleWrapper,
} from "./styles";
export function ForgotPasswordConfirm({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [code, setCode] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertCode, setAlertCode] = useState(false);
  const [notSavedDataMsg, setNotSavedDataMsg] = useState<boolean>(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertMinPassword, setAlertMinPassword] = useState(false);


  

  const _onSendPressed = async () => {+
    
    navigation.navigate("ForgotPasswordConfirm");
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TitleWrapper>
          <Title>Redefinir senha</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Subtitle>Digite abaixo o código que foi enviado para o</Subtitle>
          <Subtitle>seu email e digite também uma nova senha!</Subtitle>
        </TitleWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="Código"
            onChange={(text) => setCode({ value: text, error: "" })}
            value={code.value}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="Nova senha"
            secureTextEntry
            onChange={(text) => setPassword({ value: text, error: "" })}
            value={password.value}
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            placeholder="Confirmar nova senha"
            secureTextEntry
            onChange={(text) => setPasswordConfirm({ value: text, error: "" })}
            value={passwordConfirm.value}
          />
        </TextFieldWrapper>
        <BlueButton buttonText="Confirmar" action={_onSendPressed} />
      </ScrollView>
      {alertCode && (
        <MessageBalloon
          title="Atenção"
          text={error}
          handleConfirmButton={() => {
            setAlertCode(false);
          }}
        />
      )}
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
          text="Por favor, preencha todos os dados antes de enviar."
          handleConfirmButton={() => {
            setAlert(false);
          }}
        />
      )}
      {alertPassword && (
        <MessageBalloon
          title="Atenção"
          text="As senhas não coincidem."
          handleConfirmButton={() => {
            setAlertPassword(false);
          }}
        />
      )}
      {alertMinPassword && (
        <MessageBalloon
          title="Atenção"
          text="A senha deve ter no mínimo 6 caracteres."
          handleConfirmButton={() => {
            setAlertMinPassword(false);
          }}
        />
      )}
    </Container>
  );
}
export default memo(ForgotPasswordConfirm);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
});
