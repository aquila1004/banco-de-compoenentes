import { MaskInputProps } from "react-native-mask-input";
import MaskInput from "react-native-mask-input";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons"; 

import { DynamicInputView, InputView, RequiredField } from "./styles";

interface Props {
  required?: boolean;
  secureTextEntry?: boolean;
  small?: boolean;
  value?: string | any;
  onChange?: (masked: string, unmasked: string) => void;
  placeholder: string;
  mask?: (string | RegExp)[] | null;
  width?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode"
    | undefined;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | undefined;
  autoCorrect?: boolean;
  autoComplete?:
    | "birthdate-day"
    | "birthdate-full"
    | "birthdate-month"
    | "birthdate-year"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-day"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "email"
    | "gender"
    | "name"
    | "name-family"
    | "name-given"
    | "name-middle"
    | "name-middle-initial"
    | "name-prefix"
    | "name-suffix"
    | "password"
    | "password-new"
    | "postal-address"
    | "postal-address-country"
    | "postal-address-extended"
    | "postal-address-extended-postal-code"
    | "postal-address-locality"
    | "postal-address-region"
    | "postal-code"
    | "street-address"
    | "sms-otp"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-device"
    | "username"
    | "username-new"
    | "off";
  maxLength?: number;
}

interface Styles {
  inputStyle: MaskInputProps;
}

const styles = StyleSheet.create<Styles>({
  inputStyle: {
    fontWeight: "300",
    color: "black",
    width: wp("100%"),
    marginLeft: 10,
    fontSize: 15,
  },
});

export function TextSearch({
  required = false,
  secureTextEntry = false,
  small,
  value = "",
  onChange,
  placeholder,
  mask,
  width,
  autoCapitalize = "sentences",
  textContentType = "none",
  keyboardType = "default",
  autoCorrect = true,
  autoComplete = "off",
  maxLength = 50,
}: Props) {
  if (mask)
    if (!width)
      return (
        <InputView small={small}>
          {required && <RequiredField>*</RequiredField>}
          <MaskInput
            value={value}
            placeholder={placeholder}
            style={styles.inputStyle}
            onChangeText={onChange}
            mask={mask}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            textContentType={textContentType}
            keyboardType={keyboardType}
            autoCorrect={autoCorrect}
            autoComplete={autoComplete}
            maxLength={maxLength}
          />
          <Ionicons
            name="search"
            size={24}
            color="#E5E5E5"
            style={{ position: "absolute", right: 10 }}
          />
        </InputView>
      );
    else
      return (
        <DynamicInputView width={width}>
          {required && <RequiredField>*</RequiredField>}
          <MaskInput
            value={value}
            placeholder={placeholder}
            style={styles.inputStyle}
            onChangeText={onChange}
            mask={mask}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            textContentType={textContentType}
            keyboardType={keyboardType}
            autoCorrect={autoCorrect}
            autoComplete={autoComplete}
            maxLength={maxLength}
          />
          <Ionicons
            name="search"
            size={24}
            color="#E5E5E5"
            style={{ position: "absolute", right: 10 }}
          />
        </DynamicInputView>
      );
  else if (!width)
    return (
      <InputView small={small}>
        {required && <RequiredField>*</RequiredField>}
        <MaskInput
          value={value}
          placeholder={placeholder}
          style={styles.inputStyle}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          textContentType={textContentType}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        <Ionicons
          name="search"
          size={24}
          color="#a49f9f"
          style={{ position: "absolute", right: 5, top: 10 }}
        />
      </InputView>
    );
  else {
    return (
      <DynamicInputView width={width}>
        {required && <RequiredField>*</RequiredField>}
        <MaskInput
          value={value}
          placeholder={placeholder}
          style={styles.inputStyle}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          textContentType={textContentType}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        <Ionicons
          name="search"
          size={24}
          color="black"
          top={10}
          style={{ position: "absolute", right: 10,  }}
        />
      </DynamicInputView>
    );
  }
}
