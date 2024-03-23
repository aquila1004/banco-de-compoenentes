import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const ButtonContainer = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  width: ${RFValue(200)}px;
  margin: auto;
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(50)}px;
  border-radius: 10px;
  background-color: rgb(255,0,0);
`;

export const ButtonText = styled.Text`
  margin: auto;
  font-size: ${RFValue(14)}px;
  color: #fff;
`;