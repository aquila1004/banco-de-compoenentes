import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const ButtonContainer = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  width: ${RFValue(310)}px;
  margin: auto;
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(50)}px;
  border-radius: 1px;
  background-color: rgba(184, 127, 61, 1);
`;

export const ButtonText = styled.Text`
  margin: auto;
  font-size: ${RFValue(14)}px;
  color: #fff;
`;