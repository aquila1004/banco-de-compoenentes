import { TouchableOpacity, StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { BlueButton } from "../../components/BlueButton";
import { TextField } from "../../components/TextFiel";
import Spinner from "react-native-loading-spinner-overlay";

import {
  Container,
  Title,
  TextFieldWrapper,
  ButtonWrapper,
  RegisterContainer,
  RegisterContent,
  ForgotPasswordContainer,
  ForgotPasswordContent,
} from "./styles";

export function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const _onLoginPressed = async () => {
    navigation.navigate("Navbar");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Title>Login</Title>
      <TextFieldWrapper>
        <TextField
          placeholder="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          onChange={(text) => setEmail({ value: text, error: "" })}
          value={email.value}
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <TextField
          placeholder="Senha"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          textContentType="password"
          autoComplete="password"
          onChange={(text) => setPassword({ value: text, error: "" })}
          value={password.value}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordButton}
        >
          <FontAwesome
            name={showPassword ? "eye-slash" : "eye"}
            size={22}
            color="#ed9a2e"
          />
        </TouchableOpacity>
      </TextFieldWrapper>
      <ButtonWrapper>
        <BlueButton buttonText="Entrar" action={_onLoginPressed} />
        <Spinner visible={isLoading} />
      </ButtonWrapper>
      <RegisterContainer onPress={() => navigation.navigate("RegisterScreen")}>
        <RegisterContent>Ainda não tem uma conta? Cadastre-se</RegisterContent>
      </RegisterContainer>
      <ForgotPasswordContainer
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <ForgotPasswordContent>Esqueci Minha Senha</ForgotPasswordContent>
      </ForgotPasswordContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  showPasswordButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
});

export default memo(LoginScreen);
