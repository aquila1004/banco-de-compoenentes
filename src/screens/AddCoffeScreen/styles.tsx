import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const TextFieldWrapper = styled.View`
  margin-top: ${wp(2.5)}px;
  margin-bottom: ${wp(2.5)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(26)}px;
  color: rgb(167, 126, 51);
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const TextAreaWrapper = styled.View`
  margin-bottom: 50px;
  width: ${wp(90)};
  height: 25%;
  align-self: center;
`;

export const TextArea = styled.TextInput`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 5px;
  align-items: center;
`;