import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Divider = styled.View`
  top: 5%;
  height: ${RFValue(20)}px;
  width: ${wp("85%")}px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(150, 150, 150, 1);
`;

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  align-items: center;
`;

export const Subtitle = styled.Text`
  top: ${RFValue(getStatusBarHeight() + 0)}px;
  margin-top: ${RFValue(0)}px;
  color: #0a0b0c80;
  text-align: center;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;

export const TextFieldWrapper = styled.View`
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(20)}px;
  top: ${RFValue(getStatusBarHeight()+ 10)}px;
 
`;
export const ButtonWrapper = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const BackButtonWrapper = styled.View`
  top: ${RFValue(getStatusBarHeight() + 0)}px;
  align-items: flex-end;
  margin-left: ${RFValue(getStatusBarHeight() - 30)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  color: rgba(0, 0, 0, 1);
  top: ${RFValue(getStatusBarHeight() + 15)}px;
`;
export const TitleWrapper = styled.View`
  margin-bottom: 30px;
  align-items: center;
`;

export const RegisterContainer = styled.TouchableOpacity`
  margin-top: ${RFValue(0)}px;
  left: ${RFValue(40)}px;

`;
export const RegisterContent = styled.Text`
color : #7b8794;
`;