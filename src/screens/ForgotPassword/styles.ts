import styled from "styled-components/native";
import { RFValue} from "react-native-responsive-fontsize";
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
  top: ${RFValue(getStatusBarHeight() - 10)}px;
 
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
export const Divider = styled.View`
  height: ${RFValue(20)}px;
  width: ${wp("100%")}px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

export const ButtonWrapper = styled.View`
  margin-top: ${RFValue(30)}px;
`;